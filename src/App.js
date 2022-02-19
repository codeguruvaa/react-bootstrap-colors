import React from 'react';
import { Col, Container, Row,Badge, Alert } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Heading from './Heading.js';

function App() {
  return (
    <div>

    <Heading />

    <Container variant="success">
      <Row>
        <Col sm={6} lg={9}>
          <Alert variant='info' className='shadow'>
            <p>
              the quick brwon fox jumps over the lazy dog the quick brwon fox jumps over the lazy dog
              the quick brwon fox jumps over the lazy dog the quick brwon fox jumps over the lazy dog
              the quick brwon fox jumps over the lazy dog the quick brwon fox jumps over the lazy dog
              the quick brwon fox jumps over the lazy dog the quick brwon fox jumps over the lazy dog
              the quick brwon fox jumps over the lazy dog the quick brwon fox jumps over the lazy dog
              the quick brwon fox jumps over the lazy dog the quick brwon fox jumps over the lazy dog
            </p>
            </Alert>
          </Col>
          <Col sm={6} lg={3}>
            <Alert variant='danger' className='shadow'>
            <p>
              the quick brwon fox jumps over the lazy dog the quick brwon fox jumps over the lazy dog
              the quick brwon fox jumps over the lazy dog the quick brwon fox jumps over the lazy dog
              the quick brwon fox jumps over the lazy dog the quick brwon fox jumps over the lazy dog
              the quick brwon fox jumps over the lazy dog the quick brwon fox jumps over the lazy dog
              the quick brwon fox jumps over the lazy dog the quick brwon fox jumps over the lazy dog
              the quick brwon fox jumps over the lazy dog the quick brwon fox jumps over the lazy dog
            </p>
            </Alert>
          </Col>
          </Row>
    </Container>





    </div>
  );
}

export default App;