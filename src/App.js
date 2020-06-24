import React from 'react';
import './App.css';
import history from "./history";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AddPlayer from "./components/AddPlayer";
import PlayersTable from "./components/PlayersTable";
import Reset from "./components/Reset";
import TeamTable from './components/TeamTable';
import GenerateTeams from './components/GenerateTeams';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => (
    <Router history={ history }>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/create-players">
            <AddPlayer/>
            <PlayersTable/>
            <Container>
                <Row>
                    <Col className="justify-content-center d-flex">
                        <GenerateTeams/>
                    </Col>
                    <Col className="justify-content-center d-flex">
                        <Reset/>
                    </Col>
                </Row>
            </Container>
        </Route>

        <Route exact path="/teams">
            <TeamTable/>
            <Reset/>
        </Route>
    </Router>
);

export default App;
