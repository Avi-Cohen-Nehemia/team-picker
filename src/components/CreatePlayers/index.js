import React from 'react';
import { Link } from 'react-router-dom';
import AddPlayer from './../AddPlayer';
import PlayersTable from './../PlayersTable';
import AlertMessage from './../AlertMessage';
import Reset from './../Reset';
import GenerateTeams from '../GenerateTeams';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// a component to wraps all of the components that make up the 'create-players' page
const CreatePlayers = () => (
  <>
    <AddPlayer/>
    <AlertMessage/>
    <PlayersTable/>
    <Container>
      <Row>
        <Col className='justify-content-center d-flex'>
          <Link to='/confirm-teams'>
            <GenerateTeams color={'success'}>
              {'Generate Teams'}
            </GenerateTeams>
          </Link>
        </Col>
        <Col className='justify-content-center d-flex'>
          <Reset>{'Reset'}</Reset>
        </Col>
      </Row>
    </Container>
  </>
);

export default CreatePlayers;