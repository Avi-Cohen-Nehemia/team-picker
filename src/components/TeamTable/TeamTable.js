import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TeamTable = ({ teamA, teamB }) => (
    <Row>
        <Col>
            <Card>
                <Card.Header>Team A</Card.Header>
                <ListGroup variant="flush">
                    { teamA.map((player, index) => (
                        <ListGroup.Item key={ index }>{ player.name + " " + player.skillLevel}</ListGroup.Item>
                    )) }
                </ListGroup>
            </Card>
        </Col>
        <Col>
            <Card>
                <Card.Header>Team B</Card.Header>
                <ListGroup variant="flush">
                    { teamB.map((player, index) => (
                        <ListGroup.Item key={ index }>{ player.name + " " + player.skillLevel}</ListGroup.Item>
                    )) }
                </ListGroup>
            </Card>
        </Col>
    </Row>
);

export default TeamTable;