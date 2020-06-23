import React from "react";
import Button from "react-bootstrap/Button";

const GenerateTeams = ({ handleGenerateTeams }) => (
    <Button
        variant="success"
        onClick={ handleGenerateTeams }
    >
        Generate Teams
    </Button>
);

export default GenerateTeams;