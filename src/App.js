import React from 'react';
import './App.css';
import history from "./history";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                        <Reset/>
                    </Col>
                </Row>
            </Container>
        </Route>

        <Route exact path="/confirm-teams">
            <Container>
                <TeamTable/>
                <Reset/>
            </Container>
        </Route>
    </Router>
);

export default App;
