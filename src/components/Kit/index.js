import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTeamKit, selectTeamColor } from "../../data/actions/state";
import Form from 'react-bootstrap/Form';
import { CirclePicker } from 'react-color';
import './../../assets/css/kits.css'
import kit1 from './../../assets/images/kit1.png';
import kit2 from './../../assets/images/kit2.png';
import kit3 from './../../assets/images/kit3.png';

const Kit = ({team}) => {
	const dispatch = useDispatch();
	const { teamA, teamB } = useSelector((state) => state);

	const handleKit = (number, team) => {
		if (team === 'a') {
			dispatch(selectTeamKit(number, 'teamA'));
		} else {
			dispatch(selectTeamKit(number, 'teamB'));
		}
	}

	const handleColorPicker = (color, team) => {
		if (team === 'a') {
			dispatch(selectTeamColor(color.hex, 'teamA'))
		} else {
			dispatch(selectTeamColor(color.hex, 'teamB'))
		}
	};

	const kitStyle = (team, number) => {
		if (team === 'a') {
			return teamA.kit === number ? teamA.color : null
		} else {
			return teamB.kit === number ? teamB.color : null
		}
	}

	return (
		<>
			<Form.Group className='pt-4'>
				<Form.Label style={{ color: 'white' }}>
					<strong>Choose Kit</strong>
				</Form.Label>
				<div 
					className='d-flex justify-content-around align-items-center'
					style={{
						backgroundColor: 'white',
						borderRadius: '5px',
						height: '4rem'
					}}
				>
					<img
						src={ kit1 }
						alt='football-shirt'
						className='kit-logo'
						style={{ backgroundColor: kitStyle(team, 1) }}
						onClick={() => handleKit(1, team)}
					/>
					<img
						src={ kit2 }
						alt='football-shirt'
						className='kit-logo'
						style={{ backgroundColor: kitStyle(team, 2) }}
						onClick={() => handleKit(2, team)}
					/>
					<img
						src={ kit3 }
						alt='football-shirt'
						className='kit-logo'
						style={{ backgroundColor: kitStyle(team, 3) }}
						onClick={() => handleKit(3, team)}
					/>
				</div>
			</Form.Group>
			<Form.Group className='pt-4'>
				<Form.Label style={{color: 'white'}}>
					<strong>Choose Color</strong>
				</Form.Label>
				<CirclePicker onChange={(color) => handleColorPicker(color, team)} />
			</Form.Group>
		</>
	);
};

export default Kit;
