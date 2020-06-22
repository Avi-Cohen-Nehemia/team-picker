import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Form from "./components/AddPlayer/AddPlayer";

const App = () => (
  <Router>
    <Form/>
  </Router>
);

export default App;
