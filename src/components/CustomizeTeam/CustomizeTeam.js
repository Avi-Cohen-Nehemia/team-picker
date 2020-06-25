import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import kit1 from './../../assets/images/kit1.png';
import kit2 from './../../assets/images/kit2.png';
import kit3 from './../../assets/images/kit3.png';

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
                            <Form.Group>
                                <Form.Label style={{ color: "white" }}>
                                    <strong>Choose Kit</strong>
                                </Form.Label>
                                <div 
                                    className="d-flex justify-content-around align-items-center"
                                    style={{
                                        backgroundColor: "white",
                                        borderRadius: "5px",
                                        height: "4rem"
                                    }}>
                                    <img
                                        src={ kit1 }
                                        alt="football-shirt"
                                        width="50"
                                        height="50"
                                    />
                                    <img
                                        src={ kit2 }
                                        alt="football-shirt"
                                        width="50"
                                        height="50"
                                    />
                                    <img
                                        src={ kit3 }
                                        alt="football-shirt"
                                        width="50"
                                        height="50"
                                    />
                                </div>
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