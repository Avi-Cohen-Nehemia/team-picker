import React from "react";
import Button from "react-bootstrap/Button";

const Reset = ({ handleReset }) => (
    <Button
        variant="danger"
        onClick={ handleReset }
    >
        Reset
    </Button>
);

export default Reset;