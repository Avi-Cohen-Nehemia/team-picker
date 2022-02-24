import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateTeams } from "../../data/actions/state";
import Button from 'react-bootstrap/Button';

const GenerateTeams = ({ color, children }) => {

  const { playersPool } = useSelector((state) => state)
  const dispatch = useDispatch()

  const isValid = playersPool.length > 5 && playersPool.length % 2 === 0;

  return (
    <Button
      variant={color}
      onClick={() => dispatch(generateTeams())}
      disabled={!isValid}
    >
      {children}
    </Button>
  );
};

export default GenerateTeams;
