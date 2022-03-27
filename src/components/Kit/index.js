import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTeamAKit, selectTeamAColor, selectTeamBKit, selectTeamBColor } from "../../data/actions/state";
import Form from 'react-bootstrap/Form';
import { CirclePicker } from 'react-color';
import './../../assets/css/kits.css'
import kit1 from './../../assets/images/kit1.png';
import kit2 from './../../assets/images/kit2.png';
import kit3 from './../../assets/images/kit3.png';

const Kit = ({defaultColor, team}) => {
	const dispatch = useDispatch();

	const [kit, setKit] = useState({
		selected: 1,
		color: defaultColor,
	});

	const handleKit = (number, team) => {
		setKit({
			...kit,
			selected: number
		});
		if (team === 'a') {
			dispatch(selectTeamAKit(kit));
		} else {
			dispatch(selectTeamBKit(kit));
		}
	}

	const handleColorPicker = (color, team) => {
		setKit({
			...kit,
			color: color.hex
		});
		if (team === 'a') {
			dispatch(selectTeamAColor(kit))
		} else {
			dispatch(selectTeamBColor(kit))
		}
	};

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
						style={{ backgroundColor: kit.selected === 1 ? kit.color : null }}
						onClick={() => handleKit(1, team)}
					/>
					<img
						src={ kit2 }
						alt='football-shirt'
						className='kit-logo'
						style={{ backgroundColor: kit.selected === 2 ? kit.color : null }}
						onClick={() => handleKit(2, team)}
					/>
					<img
						src={ kit3 }
						alt='football-shirt'
						className='kit-logo'
						style={{ backgroundColor: kit.selected === 3 ? kit.color : null }}
						onClick={() => handleKit(3, team)}
					/>
				</div>
			</Form.Group>
			<Form.Group className='pt-4'>
				<Form.Label style={{color: 'white'}}>
					<strong>Choose Colour</strong>
				</Form.Label>
				<CirclePicker onChange={handleColorPicker} />
			</Form.Group>
		</>
	);
};

export default Kit;
