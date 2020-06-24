import React from "react";
import Alert from 'react-bootstrap/Alert'

const AlertMessage = ({ conditionsNotMet }) => (
    <Alert
        variant={ conditionsNotMet ? "danger" : "success"}
    >
        { conditionsNotMet ? "Player Pool must have a minimum of 6 players and must be an even number" : "You are ready to continue!" }
    </Alert>
);

export default AlertMessage;