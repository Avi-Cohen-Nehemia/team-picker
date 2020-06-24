import React from "react";
import Button from "react-bootstrap/Button";

const Reset = ({ text, handleReset }) => (
    <Button
        variant="danger"
        onClick={ handleReset }
    >
        { text }
    </Button>
);

export default Reset;