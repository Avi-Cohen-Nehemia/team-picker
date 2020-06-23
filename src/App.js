import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AddPlayer from "./components/AddPlayer";
import PlayersTable from "./components/PlayersTable";
import Reset from "./components/Reset";
import TeamTable from './components/TeamTable';
import GenerateTeams from './components/GenerateTeams';

const App = () => (
    <Router>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/create-players">
            <AddPlayer/>
            <PlayersTable/>
            <GenerateTeams/>
            <Reset/>
        </Route>

        <Route exact path="/teams">
            <TeamTable/>
            <Reset/>
        </Route>
    </Router>
);

export default App;
