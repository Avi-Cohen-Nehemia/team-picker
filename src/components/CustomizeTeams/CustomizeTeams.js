import React, { Component } from "react";
import { Link } from "react-router-dom";

// import local components
import Kit from "../Kit";

// import Bootstrap components
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import page styling
import "./../../assets/css/customize-page.css";

// a component to wraps all of the components that make up the "customize-teams" page
class CustomizeTeams extends Component {

    constructor(props) {

        super(props);

        this.state = {
            teamAName: props.teamAName,
            teamBName: props.teamBName,
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
            <Container>
                <Form onSubmit={ this.handleSubmit }>
                    <Row>
                        <Col>
                            <Jumbotron className="customize-container">
                                <Form.Group>
                                    <Form.Label className="customize-label">Team A Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter team's name"
                                        onChange={ this.handleTeamAName }
                                        value={this.state.teamAName}
                                        maxLength="10"
                                    />
                                </Form.Group>
                                <Kit defaultColor={'red'} team={'a'} />
                            </Jumbotron>
                        </Col>
                        <Col>
                            <Jumbotron className="customize-container">
                                <Form.Group>
                                    <Form.Label className="customize-label">Team B Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter team's name"
                                        onChange={ this.handleTeamBName }
                                        value={this.state.teamBName}
                                        maxLength="10"
                                    />
                                </Form.Group>
                                <Kit defaultColor={'blue'} team={'b'} />
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center mt-5">
                        <Link to="/football-pitch">
                        <Button
                            size="lg"
                            variant="success"
                            type="submit"
                        >
                            Start Playing!
                        </Button>
                        </Link>
                    </Row>
                </Form>
            </Container>
        );
    }
}
  
export default CustomizeTeams;