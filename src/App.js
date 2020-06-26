import React from 'react';
import './App.css';
import history from "./history";
import { Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import AddPlayer from "./components/AddPlayer";
import PlayersTable from "./components/PlayersTable";
import Reset from "./components/Reset";
import TeamTable from './components/TeamTable';
import GenerateTeams from './components/GenerateTeams';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AlertMessage from './components/AlertMessage';
import Button from 'react-bootstrap/Button';
import CustomizeTeams from './components/CustomizeTeam';
import FootballPitch from './components/FootballPitch';

const App = () => (
    <Router history={ history }>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/create-players">
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
        </Route>

        <Route exact path="/confirm-teams">
            <Container>
                <TeamTable/>
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
        </Route>

        <Route exact path="/customize-teams">
            <Container>
                <CustomizeTeams/>
            </Container>
        </Route>

        <Route exact path="/football-pitch">
            <FootballPitch/>
        </Route>
    </Router>
);

export default App;