import React from "react";
import Button from "react-bootstrap/Button";

const Reset = ({ handleGenerateTeams }) => (
    <Button
        variant="success"
        onClick={ handleGenerateTeams }
    >
        Reset
    </Button>
);

export default Reset;