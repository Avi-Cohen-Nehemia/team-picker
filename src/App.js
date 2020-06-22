import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AddPlayer from "./components/AddPlayer";
import PlayersTable from "./components/PlayersTable";
import Reset from "./components/Reset";
import TeamTable from './components/TeamTable/TeamTable';
import GenerateTeams from './components/GenerateTeams';

const App = () => (
    <Router>
        <AddPlayer/>
        <PlayersTable/>
        <GenerateTeams/>
        <TeamTable/>
        <Reset/>
    </Router>
);

export default App;
