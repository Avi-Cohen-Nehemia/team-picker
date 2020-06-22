import React from "react";
import Table from "react-bootstrap/Table";

const PlayerPool = () => (
    <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th>#</th>
                <th>Player's Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
        </tbody>
    </Table>
);

export default PlayerPool;