import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup"

const TeamTable = () => (
    <Card>
        <Card.Header>Header</Card.Header>
        <ListGroup variant="flush">
            <ListGroup.Item>
                Zoe
            </ListGroup.Item>
        </ListGroup>
    </Card>
);

export default TeamTable;