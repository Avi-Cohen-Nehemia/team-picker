import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AddPlayer from "./components/AddPlayer";
import PlayersTable from "./components/PlayersTable";
import Reset from "./components/Reset";

const App = () => (
  <Router>
    <AddPlayer/>
    <PlayersTable/>
    <Reset/>
  </Router>
);

export default App;
