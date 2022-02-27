import React from 'react';
import { useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';

// show a message which its content and color depend on a condition
const AlertMessage = () => {

  const { playersPool } = useSelector((state) => state);
  const isValid = playersPool.length > 5 && playersPool.length % 2 === 0;

  return (
    <Alert variant={isValid ? 'success' : 'danger'}>
      {isValid ? 'You are ready to continue!' : 'Player Pool must have a minimum of 6 players and must be an even number'}
    </Alert>
  );
} ;

export default AlertMessage;
