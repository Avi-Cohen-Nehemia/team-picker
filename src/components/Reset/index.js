import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { resetGame } from '../../data/actions/state';

// a component to erase all data and start over from the 'create-players' page
const Reset = ({ children }) => {

  const dispatch = useDispatch();

  return (
    <Link to='/create-players'>
      <Button
        variant='danger'
        onClick={() => dispatch(resetGame())}
      >
        {children}
      </Button>
    </Link>
  );
};

export default Reset;
