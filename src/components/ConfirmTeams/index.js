import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Reset from '../Reset';
import GenerateTeams from '../GenerateTeams';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ConfirmTeams = () => {

  const { teamA, teamB } = useSelector((state) => state);

  return (
    <Container>
      <Row style={{ paddingTop: '15%' }}>
        <Col>
          <Card className='text-center'>
            <Card.Header>{'Team A'}</Card.Header>
            <ListGroup variant='flush'>
              { teamA.players.map((player, index) => (
                <ListGroup.Item
                  key={index}
                  className='d-flex justify-content-around'
                >
                  <Col>{player.name}</Col>
                  <Col>{player.skillLevel}</Col>
                </ListGroup.Item>
              )) }
              <ListGroup.Item>{'Total Skill Level: '}<strong>{teamA.totalSkillLevel}</strong></ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
            <Card className='text-center'>
              <Card.Header>{'Team B'}</Card.Header>
              <ListGroup variant='flush'>
                { teamB.players.map((player, index) => (
                  <ListGroup.Item
                    key={index}
                    className='d-flex justify-content-around'
                >
                    <Col>{player.name}</Col>
                    <Col>{player.skillLevel}</Col>
                  </ListGroup.Item>
                )) }
                <ListGroup.Item>{'Total Skill Level: '}<strong>{teamB.totalSkillLevel}</strong></ListGroup.Item>
              </ListGroup>
            </Card>
        </Col>
    </Row>
    <Row className='mt-4'>
        <Col className='justify-content-center d-flex'>
          <Link to='/customize-teams'>
            <Button variant='success'>
              {'Confirm Teams'}
            </Button>
          </Link>
        </Col>
        <Col className='justify-content-center d-flex'>
          <GenerateTeams color={'warning'}>
            {'Reshuffle Teams'}
          </GenerateTeams>
        </Col>
        <Col className='justify-content-center d-flex'>
          <Reset>{'Start Over'}</Reset>
        </Col>
      </Row>
    </Container>
  );
};
export default ConfirmTeams;