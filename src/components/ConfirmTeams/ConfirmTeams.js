import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Reset from "../Reset";
import GenerateTeams from '../GenerateTeams';

const ConfirmTeams = ({ teamA, teamB }) => (
    <Container>
        <Row style={{ paddingTop: "15%" }}>
            <Col>
                <Card className="text-center">
                    <Card.Header>Team A</Card.Header>
                    <ListGroup variant="flush">
                        { teamA.map((player, index) => (
                            <ListGroup.Item
                                key={ index }
                                className="d-flex justify-content-around"
                            >
                                <span>{ player.name}</span>
                                <span>{player.skillLevel}</span>
                            </ListGroup.Item>
                        )) }
                    </ListGroup>
                </Card>
            </Col>
            <Col>
                <Card className="text-center">
                    <Card.Header>Team B</Card.Header>
                    <ListGroup variant="flush">
                        { teamB.map((player, index) => (
                            <ListGroup.Item
                                key={ index }
                                className="d-flex justify-content-around"
                            >
                                <span>{ player.name}</span>
                                <span>{player.skillLevel}</span>
                            </ListGroup.Item>
                        )) }
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        <Row className="mt-4">
            <Col className="justify-content-center d-flex">
                <Link to="/customize-teams">
                    <Button variant="success">
                        Confirm Teams
                    </Button>
                </Link>
            </Col>
            <Col className="justify-content-center d-flex">
                <GenerateTeams
                    text={ "Reshuffle Teams" }
                    color={ "warning" }
                />
            </Col>
            <Col className="justify-content-center d-flex">
                <Link to="/create-players">
                    <Reset text={ "Start Over" }/>
                </Link>
            </Col>
        </Row>
    </Container>
);

export default ConfirmTeams;