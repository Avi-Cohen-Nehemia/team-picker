import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TeamAKit from "../Kits/TeamAKit";
import TeamBKit from "../Kits/TeamBKit";

class CustomizeTeams extends Component {

    constructor(props) {

        super(props);

        this.state = {
            teamAName: "Team A",
            teamBName: "Team B",
            teamAColor: "blue",
            teamBColor: "red"
        };

        this.handleTeamAName = this.handleTeamAName.bind(this);
        this.handleTeamBName = this.handleTeamBName.bind(this);
        this.handleTeamAColor = this.handleTeamAColor.bind(this);
        this.handleTeamBColor = this.handleTeamBColor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTeamAName(e) {
        this.setState({ teamAName: e.currentTarget.value });
    }

    handleTeamBName(e) {
        this.setState({ teamBName: e.currentTarget.value });
    }

    handleTeamAColor(color, e) {
        this.setState({ teamAColor: color.hex });
    }

    handleTeamBColor(color, e) {
        this.setState({ teamBColor: color.hex });
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
                                    onChange={ this.handleTeamAName }
                                    value={this.state.teamAName}
                                    maxLength="20"
                                />
                            </Form.Group>
                            <TeamAKit/>
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
                            <TeamBKit/>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center mt-5">
                    <Button
                        size="lg"
                        variant="success"
                        type="submit"
                    >
                        Start Playing!
                    </Button>
                </Row>
            </Form>
        );
    }
}
  
export default CustomizeTeams;