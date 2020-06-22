import React from "react";
import Table from "react-bootstrap/Table";

const PlayersTable = ({ playersPool }) => (
    <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th>#</th>
                <th>Player's Name</th>
            </tr>
        </thead>
        <tbody>
            { playersPool.map((player, index) => (
                <tr key={ index }>
                    <td>{ index + 1 }</td>
                    <td>{ player }</td>
                </tr>
            )) }
        </tbody>
    </Table>
);

export default PlayersTable;