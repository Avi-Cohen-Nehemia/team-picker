import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTeamsNames } from '../../data/actions/state';
import Kit from '../Kit';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './../../assets/css/customize-page.css';

// a component to wraps all of the components that make up the 'customize-teams' page
const CustomizeTeams = () => {
	const dispatch = useDispatch();

	const [teams, setTeams] = useState({
		teamAName: 'Team A',
		teamBName: 'Team B'
	});

	const handleTeamName = (e, team) => {
		setTeams({
			...teams,
			[team]: e.currentTarget.value
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(setTeamsNames(teams));
	}
	
	return(
		<Container>
			<Form onSubmit={ handleSubmit }>
				<Row>
					<Col>
						<Jumbotron className='customize-container'>
							<Form.Group>
								<Form.Label className='customize-label'>Team A Name</Form.Label>
								<Form.Control
									type='text'
									placeholder={'Enter team\'s name'}
									onChange={(e) => handleTeamName(e, 'teamAName')}
									value={teams.teamAName}
									maxLength='10'
								/>
							</Form.Group>
							<Kit team={'a'} />
						</Jumbotron>
					</Col>
					<Col>
						<Jumbotron className='customize-container'>
							<Form.Group>
								<Form.Label className='customize-label'>Team B Name</Form.Label>
								<Form.Control
									type='text'
									placeholder={'Enter team\'s name'}
									onChange={(e) => handleTeamName(e, 'teamBName')}
									value={teams.teamBName}
									maxLength='10'
								/>
							</Form.Group>
							<Kit team={'b'} />
						</Jumbotron>
					</Col>
				</Row>
				<Row className='d-flex justify-content-center mt-5'>
					<Link to='/football-pitch'>
						<Button
							size='lg'
							variant='success'
							type='submit'
						>
							Start Playing!
						</Button>
					</Link>
				</Row>
			</Form>
		</Container>
	);
}
  
export default CustomizeTeams;