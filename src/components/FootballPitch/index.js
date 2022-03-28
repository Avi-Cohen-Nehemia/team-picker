import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	incrementTeamAScore,
	incrementTeamBScore,
	resetScore
} from "../../data/actions/state";
import Reset from './../Reset';
import TeamPositions from '../TeamPositions';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './../../assets/css/pitch-page.css';
import footballPitch from './../../assets/images/footballPitch.jpg';
import kit1 from './../../assets/images/kit1.png';
import kit2 from './../../assets/images/kit2.png';
import kit3 from './../../assets/images/kit3.png';

const KITS = {
	1: kit1,
	2: kit2,
	3: kit3,
};

// a component to wraps all of the components that make up the 'football-pitch' page
const FootballPitch = () => {
	const {	teamA, teamB } = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleTeamAScore = () => {
		dispatch(incrementTeamAScore());
	};

	const handleTeamBScore = () => {
		dispatch(incrementTeamBScore());
	};

	const handleResetScore = () => {
		dispatch(resetScore());
	};

	return (
		<>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					zIndex: '2',
					height: '60%',
					width: '50%'
				}}
			>
			<TeamPositions
				teamPlayers={teamA.players}
				teamColor={teamA.color}
				teamKit={teamA.kit}
				team={'a'}
			/>
			<TeamPositions
				teamPlayers={teamB.players}
				teamColor={teamB.color}
				teamKit={teamB.kit}
				team={'b'}
			/>
		</div>
		<div className='pitch-container'>      
			<Jumbotron className='team-panel-a'>
				<div className='d-flex flex-column align-items-center justify-content-center'>
					<h1 
						className='px-3 mb-4 text-center'
						style={{backgroundColor: teamA.color}}
					>
						{teamA.name}
					</h1>
					<img
						src={KITS[teamA.kit]}
						alt='team kit'
						className='team-kit'
						style={{backgroundColor: teamA.color}}
					/>
					<h1 className='mb-3 text-white'>{teamA.score}</h1>
					<Button
						onClick={handleTeamAScore}
						className='px-5'
						variant='success'
					>
						+
					</Button>
				</div>
			</Jumbotron>
			<img src={footballPitch} alt='football pitch' />
			<Jumbotron className='team-panel-b'>
				<div className='d-flex flex-column align-items-center justify-content-center'>
					<h1 
						className='px-3 mb-4 text-center'
						style={{backgroundColor: teamB.color}}
					>
						{teamB.name}
					</h1>
					<img
						src={KITS[teamB.kit]}
						alt='team kit'
						className='team-kit'
						style={{backgroundColor: teamB.color}}
					/>
					<h1 className='mb-3 text-white'>
						{ teamB.score }
					</h1>
					<Button
						onClick={ handleTeamBScore }
						className='px-5'
						variant='success'
					>
						+
					</Button>
				</div>
			</Jumbotron>
			</div>
			<div className='pitch-buttons'>
				<Button
					onClick={ handleResetScore }
					variant='warning'
					className='mr-3'
				>
					Reset Score
				</Button>
				<Reset className='ml-3'>Start Over</Reset>
			</div>
		</>
	);
}

export default FootballPitch;
