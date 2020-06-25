import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";

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
        this.setState({ playerName: e.currentTarget.value });
    }

    handleTeamBName(e) {
        this.setState({ playerSkillLevel: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit({ ...this.state });
    }

    render() {
        return(
            <Form>
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
                        </Jumbotron>
                    </Col>
                </Row>
            </Form>
        );
    }
}
  
export default CustomizeTeams;