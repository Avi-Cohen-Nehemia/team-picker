import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const GenerateTeams = ({ handleGenerateTeams, conditionsNotMet }) => (
    <Link to="/confirm-teams">
        <Button
            variant="success"
            onClick={ handleGenerateTeams }
            disabled={ conditionsNotMet }
        >
            Generate Teams
        </Button>
    </Link>
);

export default GenerateTeams;