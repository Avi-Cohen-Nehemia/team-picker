import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AddPlayer from "./components/AddPlayer";
import PlayersTable from './components/PlayersTable';

const App = () => (
  <Router>
    <AddPlayer/>
    <PlayersTable/>
  </Router>
);

export default App;
