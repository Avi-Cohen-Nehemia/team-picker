import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class AddPlayer extends Component {

    constructor(props) {

        super(props);

        this.state = {
            playerName: "",
            playerSkillLevel: "⭐"
        };

        this.handlePlayerName = this.handlePlayerName.bind(this);
        this.handlePlayerSkillLevel = this.handlePlayerSkillLevel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePlayerName(e) {
        this.setState({ playerName: e.currentTarget.value });
    }

    handlePlayerSkillLevel(e) {
        this.setState({ playerSkillLevel: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit({ ...this.state });
        this.setState({ playerName: "", playerSkillLevel: "⭐" })
    }

    render() {
        return(
            <React.Fragment>
                <Form
                    onSubmit={ this.handleSubmit }
                    className="pt-5"
                >
                    <Form.Row>
                        <Col sm={3}>
                            <Form.Group>
                                <Form.Label style={{ color: "white" }}>
                                    <strong>Player Name</strong>
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter player's name"
                                    onChange={ this.handlePlayerName }
                                    value={this.state.playerName}
                                    maxLength="10"
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={2}>
                            <Form.Group>
                                <Form.Label style={{ color: "white" }}>
                                    <strong>Player Skill Level</strong>
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    placeholder="Enter player's strength level"
                                    onChange={ this.handlePlayerSkillLevel }
                                    value={this.state.playerSkillLevel}
                                >
                                    { /* eslint-disable-next-line */ }
                                    <option>⭐</option>
                                    { /* eslint-disable-next-line */ }
                                    <option>⭐⭐</option>
                                    { /* eslint-disable-next-line */ }
                                    <option>⭐⭐⭐</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col
                            sm={2}
                            className="align-items-center d-flex mt-3">
                            <Button
                                variant="success"
                                type="submit"
                            >
                                Add Player
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </React.Fragment>
        );
    }
}
  
export default AddPlayer;