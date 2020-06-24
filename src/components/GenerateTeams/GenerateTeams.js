import React from "react";
import Button from "react-bootstrap/Button";

const GenerateTeams = ({ text, handleGenerateTeams, conditionsNotMet }) => (
    <Button
        variant="success"
        onClick={ handleGenerateTeams }
        disabled={ conditionsNotMet }
    >
        { text }
    </Button>
);

export default GenerateTeams;