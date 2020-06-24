import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";

class CustomizeTeams extends Component {

    constructor(props) {

        super(props);

        this.state = {
            teamAName: props.playerName,
            teamBName: props.playerSkillLevel
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
            <Row>
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
                        <Form className="justify-content-center d-flex align-items-center flex-column">

                        </Form>
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
                        <Form className="justify-content-center d-flex align-items-center flex-column">
                        </Form>
                    </Jumbotron>
                </Col>
            </Row>
        );
    }
}
  
export default CustomizeTeams;