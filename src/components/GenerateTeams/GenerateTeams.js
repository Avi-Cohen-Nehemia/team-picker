import React from "react";
import Button from "react-bootstrap/Button";

const GenerateTeams = ({ text, color, handleGenerateTeams, conditionsNotMet }) => (
    <Button
        variant={ color }
        onClick={ handleGenerateTeams }
        disabled={ conditionsNotMet }
    >
        { text }
    </Button>
);

export default GenerateTeams;