import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const App = () => {
    const [validated, setValidated] = useState(false);
    const url = 'http://127.0.0.1:8080/api/v1/users';

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault(); // Prevents the default form submission behavior
            try {
                const response = await axios.post(url, {
                    name: form.name.value,
                    email: form.email.value,
                    description: form.description.value,
                });
                console.log('Response:', response.data);
                // Do something with the response if needed
            } catch (error) {
                console.error('Error:', error);
                // Handle error appropriately
            }
        }
        setValidated(true);
    };

    return (
        <div style={{ width: "100%", display: "flex",flexDirection: "column" , justifyContent: "center", padding: '20%', backgroundColor: 'wheat' }}>
            <h4>Let in Touch</h4>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            defaultValue="Mark"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            defaultValue="mark@example.com"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control required as="textarea" aria-label="With textarea" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a description.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    );
};

export default App;
