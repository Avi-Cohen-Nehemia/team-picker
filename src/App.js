import React from "react";
import history from "./history";
import { Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ConfirmTeams from "./components/ConfirmTeams";
import CustomizeTeams from "./components/CustomizeTeams";
import FootballPitch from "./components/FootballPitch";
import CreatePlayers from "./components/CreatePlayers";

const App = () => (
    <Router history={ history }>
        <Route exact path="/" component={ Home }/>

        <Route exact path="/create-players" component={ CreatePlayers }/>

        <Route exact path="/confirm-teams" component={ ConfirmTeams }/>

        <Route exact path="/customize-teams" component={ CustomizeTeams }/>

        <Route exact path="/football-pitch" component={ FootballPitch }/>
    </Router>
);

export default App;