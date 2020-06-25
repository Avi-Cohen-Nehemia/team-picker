import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Kits from "./../Kits/Kits";

class CustomizeTeams extends Component {

    constructor(props) {

        super(props);

        this.state = {
            teamAName: props.teamAName,
            teamBName: props.teamBName
        };

        this.handleTeamAName = this.handleTeamAName.bind(this);
        this.handleTeamBName = this.handleTeamBName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTeamAName(e) {
        this.setState({ teamAName: e.currentTarget.value });
    }

    handleTeamBName(e) {
        this.setState({ teamBName: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit({ ...this.state });
    }

    render() {
        return(
            <Form onSubmit={ this.handleSubmit }>
                <Row>
                    <Col>
                        <Jumbotron
                            style={{
                                position: "relative",
                                top: "3rem",
                                opacity: 0.7,
                                backgroundColor: "black",
                                color: "white",
                            }}
                        >
                            <Form.Group>
                                <Form.Label style={{ color: "white" }}>
                                    <strong>Team A Name</strong>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter team's name"
                                    onChange={ this.handleTeamBName }
                                    value={this.state.teamBName}
                                    maxLength="20"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label style={{ color: "white" }}>
                                    <strong>Choose Kit</strong>
                                </Form.Label>
                                <Kits/>
                            </Form.Group>
                        </Jumbotron>
                    </Col>
                    <Col>
                        <Jumbotron
                            style={{
                                position: "relative",
                                top: "3rem",
                                opacity: 0.7,
                                backgroundColor: "black",
                                color: "white"
                            }}
                        >
                            <Form.Group>
                                <Form.Label style={{ color: "white" }}>
                                    <strong>Team B Name</strong>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter team's name"
                                    onChange={ this.handleTeamBName }
                                    value={this.state.teamBName}
                                    maxLength="20"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label style={{ color: "white" }}>
                                    <strong>Choose Kit</strong>
                                </Form.Label>
                                <Kits/>
                            </Form.Group>
                        </Jumbotron>
                    </Col>
                </Row>
                <Button
                    variant="success"
                    type="submit"
                >
                    Start Playing!
                </Button>
            </Form>
        );
    }
}
  
export default CustomizeTeams;