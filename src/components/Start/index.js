import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Start = () => (
  <Link to='/create-players'>
    <Button
      variant='success'
      size='lg'
    >
      {'Let\'s Go!'}
    </Button>
  </Link>
);

export default Start;
