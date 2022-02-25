import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removePlayer } from "../../data/actions/state";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const PlayersTable = () => {

  const { playersPool } = useSelector((state) => state);
  const dispatch = useDispatch();

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
          <th>{'#'}</th>
          <th>{'Player\'s Name'}</th>
          <th>{'Player\'s Skill Level'}</th>
          <th>{'Remove Player'}</th>
        </tr>
      </thead>
      <tbody>
        { playersPool.map((player, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{player.name}</td>
            <td>{player.skillLevel}</td>
            <td>
              <Button
                variant="danger"
                style={{lineHeight: "0.5"}}
                onClick={() => dispatch(removePlayer(index))}
              >
                {'X'}
              </Button>
            </td>
          </tr>
        )) }
      </tbody>
    </Table>
  );
};

export default PlayersTable;
