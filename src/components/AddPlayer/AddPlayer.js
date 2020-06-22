import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddPlayer extends Component {

    constructor(props) {

        super(props);

        this.state = {
            playerName: props.playerName,
        };

        this.handlePlayerName = this.handlePlayerName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePlayerName(e) {
        this.setState({ playerName: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state);
    }

    render() {
        return(
            <React.Fragment>
                <Form>
                    <Form.Group>
                        <Form.Label>Create a player</Form.Label>
                        <Form.Control type="text" placeholder="Enter player's Name" />
                    </Form.Group>
                </Form>
                <Button
                    variant="success"
                    type="submit"
                    onClick={ this.handleSubmit }
                >
                    Add Player
                </Button>
            </React.Fragment>
        );
    }
}
  
export default AddPlayer;