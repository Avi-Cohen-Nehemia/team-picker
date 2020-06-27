import React from "react";
import Button from "react-bootstrap/Button";

// a component to erase all data and start over from the "create-players" page
const Reset = ({ text, handleReset }) => (
    <Button
        variant="danger"
        onClick={ handleReset }
    >
        { text }
    </Button>
);

export default Reset;