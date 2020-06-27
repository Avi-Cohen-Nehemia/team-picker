import React from 'react';
import history from "./history";
import { Router, Route, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './App.css';
import Home from "./components/Home";
import AddPlayer from "./components/AddPlayer";
import PlayersTable from "./components/PlayersTable";
import Reset from "./components/Reset";
import ConfirmTeams from './components/ConfirmTeams';
import GenerateTeams from './components/GenerateTeams';
import AlertMessage from './components/AlertMessage';
import CustomizeTeams from './components/CustomizeTeams';
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

        <Route exact path="/confirm-teams" component={ ConfirmTeams }/>

        <Route exact path="/customize-teams" component={ CustomizeTeams }/>

        <Route exact path="/football-pitch" component={ FootballPitch }/>
    </Router>
);

export default App;