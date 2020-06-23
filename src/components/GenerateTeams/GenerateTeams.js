import React from "react";
import Button from "react-bootstrap/Button";

const GenerateTeams = ({ handleGenerateTeams, conditionsNotMet }) => (
    <Button
        variant="success"
        onClick={ handleGenerateTeams }
        disabled={ conditionsNotMet }
    >
        Generate Teams
    </Button>
);

export default GenerateTeams;