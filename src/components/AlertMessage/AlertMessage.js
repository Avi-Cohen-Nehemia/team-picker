import React from "react";

//import Bootstrap components
import Alert from "react-bootstrap/Alert";

// show a message which its content and color depend on a condition
const AlertMessage = ({ conditionsNotMet }) => (
    <Alert
        variant={ conditionsNotMet ? "danger" : "success"}
    >
        { conditionsNotMet ? "Player Pool must have a minimum of 6 players and must be an even number" : "You are ready to continue!" }
    </Alert>
);

export default AlertMessage;