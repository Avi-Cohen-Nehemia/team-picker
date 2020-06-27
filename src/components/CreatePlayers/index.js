import React from "react";
import { Link } from "react-router-dom";
import AddPlayer from "./../AddPlayer";
import PlayersTable from "./../PlayersTable";
import AlertMessage from "./../AlertMessage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Reset from "./../Reset";
import GenerateTeams from "./../GenerateTeams";

const CreatePlayers = () => (
    <>
        <AddPlayer/>
        <AlertMessage/>
        <PlayersTable/>
        <Container>
            <Row>
                <Col className="justify-content-center d-flex">
                    <Link to="/confirm-teams">
                        <GenerateTeams
                            text={ "Generate Teams" }
                            color={ "success" }
                        />
                    </Link>
                </Col>
                <Col className="justify-content-center d-flex">
                    <Reset text={ "Reset" }/>
                </Col>
            </Row>
        </Container>
    </>
);

export default CreatePlayers;