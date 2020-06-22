import React from "react";
import Form from "react-bootstrap/Form";

const AddPlayer = () => (
    <React.Fragment>
        <Form>
            <Form.Group>
                <Form.Label>Create a player</Form.Label>
                <Form.Control type="text" placeholder="Enter player's Name" />
            </Form.Group>
        </Form>
    </React.Fragment>
);
  
export default AddPlayer;