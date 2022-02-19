import React from 'react';
import { Col, Container, Row,Badge, Alert } from 'react-bootstrap';

function App() {
    return (
        <div>
            <Container>
                <Alert bg="danger" variant='secondary'>
                <h2 className='display-4'>Heading</h2>
                </Alert>
            </Container> 
        </div>
    );
}

export default App;