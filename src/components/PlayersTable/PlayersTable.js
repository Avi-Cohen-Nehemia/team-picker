import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class PlayersTable extends Component {

    constructor(props) {

        super(props);

        this.state = {
            playersPool: props.playersPool
        };

        this.handleRemovePlayer = this.handleRemovePlayer.bind(this);
    }

    handleRemovePlayer(e, index) {
        this.props.handleRemovePlayer(index);
    }

    render() {
        return(
            <Table
                striped
                bordered
                hover
                size="sm"
                variant="dark"
                className="mt-3 text-center"
            >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Player's Name</th>
                        <th>Player's Skill Level</th>
                        <th>Remove Player</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.playersPool.map((player, index) => (
                        <tr key={ index }>
                            <td>{ index + 1 }</td>
                            <td>{ player.name }</td>
                            <td>{ player.skillLevel }</td>
                            <td>
                                <Button
                                    variant="danger"
                                    style={{ lineHeight: "0.5"}}
                                    onClick={ (e) => this.handleRemovePlayer(e, index) }
                                >
                                    X
                                </Button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </Table>
        );
    }
}

export default PlayersTable;