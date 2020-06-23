import React from 'react';
import ReactDOM from 'react-dom';
import store from "./data/store";
import App from './App';
import Container from 'react-bootstrap/Container'

// import react-redux
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <Container>
        <App />
      </Container>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);