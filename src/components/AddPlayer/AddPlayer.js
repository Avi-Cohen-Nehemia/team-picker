import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddPlayer extends Component {

    constructor(props) {

        super(props);

        this.state = {
            playerName: props.playerName,
            playerStrength: props.playerStrength
        };

        this.handlePlayerName = this.handlePlayerName.bind(this);
        this.handlePlayerStrength = this.handlePlayerStrength.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePlayerName(e) {
        this.setState({ playerName: e.currentTarget.value });
    }

    handlePlayerStrength(e) {
        this.setState({ playerStrength: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit({ ...this.state });
    }

    render() {
        return(
            <React.Fragment>
                <Form onSubmit={ this.handleSubmit }>
                    <Form.Group>
                        <Form.Label>
                            Player Name
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter player's name"
                            onChange={ this.handlePlayerName }
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            Player Strength
                        </Form.Label>
                        <Form.Control
                            as="select"
                            placeholder="Enter player's strength level"
                            onChange={ this.handlePlayerStrength }
                        >
                            <option>&#11088;</option>
                            <option>&#11088;&#11088;</option>
                            <option>&#11088;&#11088;&#11088;</option>
                        </Form.Control>
                    </Form.Group>

                    <Button
                        variant="success"
                        type="submit"
                    >
                        Add Player
                    </Button>
                </Form>
            </React.Fragment>
        );
    }
}
  
export default AddPlayer;