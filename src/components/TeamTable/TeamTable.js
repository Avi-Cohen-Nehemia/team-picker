import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup"
import Row from 'react-bootstrap/Row'

const TeamTable = ({ teamA, teamB }) => (
    <Row>
        { teamA.length ?
        <>
            <Card>
                <Card.Header>Team A</Card.Header>
                <ListGroup variant="flush">
                    { teamA.map((player, index) => (
                        <ListGroup.Item key={ index }>{ player }</ListGroup.Item>
                    )) }
                </ListGroup>
            </Card>
            <Card>
                <Card.Header>Team B</Card.Header>
                <ListGroup variant="flush">
                    { teamB.map((player, index) => (
                        <ListGroup.Item key={ index }>{ player }</ListGroup.Item>
                    )) }
                </ListGroup>
            </Card>
        </>
        : null }
    </Row>
);

export default TeamTable;