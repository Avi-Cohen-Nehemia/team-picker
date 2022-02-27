import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../../data/actions/state';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const AddPlayer = () => {

  const dispatch = useDispatch()

  const [player, setPlayer] = useState({
    playerName: '',
    playerSkillLevel: '⭐'
  });

  const handlePlayer = (e, type) => {
    setPlayer({
      ...player,
      [type]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPlayer(player));
    setPlayer({
      playerName: '',
      playerSkillLevel: '⭐'
    });
  };
    
  return(
    <React.Fragment>
      <Form
        onSubmit={handleSubmit}
        className='pt-5'
      >
        <Form.Row>
          <Col sm={3}>
            <Form.Group>
              <Form.Label style={{ color: 'white' }}>
                <strong>{'Player Name'}</strong>
              </Form.Label>
              <Form.Control
                required
                type='text'
                placeholder={'Enter player\'s name'}
                onChange={(e) => handlePlayer(e, 'playerName')}
                value={player.playerName}
                maxLength='10'
              />
            </Form.Group>
          </Col>
          <Col sm={2}>
            <Form.Group>
              <Form.Label style={{ color: 'white' }}>
                <strong>{'Player Skill Level'}</strong>
              </Form.Label>
              <Form.Control
                as='select'
                placeholder={'Enter player\'s strength level'}
                onChange={(e) => handlePlayer(e, 'playerSkillLevel')}
                value={player.playerSkillLevel}
              >
                { /* eslint-disable-next-line */ }
                <option>⭐</option>
                { /* eslint-disable-next-line */ }
                <option>⭐⭐</option>
                { /* eslint-disable-next-line */ }
                <option>⭐⭐⭐</option>
              </Form.Control>
            </Form.Group>
          </Col>
            <Col
              sm={2}
              className='align-items-center d-flex mt-3'
            >
              <Button
                variant='success'
                type='submit'
              >
                {'Add Player'}
              </Button>
            </Col>
          </Form.Row>
      </Form>
    </React.Fragment>
  );
};
  
export default AddPlayer;
