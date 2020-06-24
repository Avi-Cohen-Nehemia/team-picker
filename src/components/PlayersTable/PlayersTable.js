import React from "react";
import Table from "react-bootstrap/Table";

const PlayersTable = ({ playersPool }) => (
    <Table
        striped
        bordered
        hover
        size="sm"
        variant="dark"
        className="mt-3"
    >
        <thead>
            <tr>
                <th>#</th>
                <th>Player's Name</th>
                <th>Player's Strength</th>
            </tr>
        </thead>
        <tbody>
            { playersPool.map((player, index) => (
                <tr key={ index }>
                    <td>{ index + 1 }</td>
                    <td>{ player.name }</td>
                    <td>{ player.strength }</td>
                </tr>
            )) }
        </tbody>
    </Table>
);

export default PlayersTable;