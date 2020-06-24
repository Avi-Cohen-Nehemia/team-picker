import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const TeamTable = ({ teamA, teamB }) => (
    <Container>
        <Row>
            <Card>
                <Card.Header>Team A</Card.Header>
                <ListGroup variant="flush">
                    { teamA.map((player, index) => (
                        <ListGroup.Item key={ index }>{ player.name + " " + player.skillLevel}</ListGroup.Item>
                    )) }
                </ListGroup>
            </Card>
            <Card>
                <Card.Header>Team B</Card.Header>
                <ListGroup variant="flush">
                    { teamB.map((player, index) => (
                        <ListGroup.Item key={ index }>{ player.name + " " + player.skillLevel}</ListGroup.Item>
                    )) }
                </ListGroup>
            </Card>
        </Row>
    </Container>
);

export default TeamTable;