import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";

const CustomizeTeams = () => (
    <Row>
        <Col>
            <Jumbotron
                style={{
                    position: "relative",
                    top: "3rem",
                    opacity: 0.7,
                    backgroundColor: "black",
                    color: "white"
                }}
            >
                <Form className="justify-content-center d-flex align-items-center flex-column">
                </Form>
            </Jumbotron>
        </Col>
        <Col>
            <Jumbotron
                style={{
                    position: "relative",
                    top: "3rem",
                    opacity: 0.7,
                    backgroundColor: "black",
                    color: "white"
                }}
            >
                <Form className="justify-content-center d-flex align-items-center flex-column">
                </Form>
            </Jumbotron>
        </Col>
    </Row>
);

export default CustomizeTeams;