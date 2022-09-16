import React from 'react';
import './accordionvisor.css';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

import Covdths from './covdths/Covdths';
import Dths from './dths/Dths';
import Medchars from './medchars/Medchars';
import Podst from './podst/Podst';


function BasicExample() {
    return (
    <div class="bootstrap-ui">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <Covdths />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            <Dths />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            <Medchars />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            <Podst />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    );
  }
  
  export default BasicExample;

