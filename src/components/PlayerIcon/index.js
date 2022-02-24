import React from 'react';
import './../../assets/css/kits.css'
import kit1 from './../../assets/images/kit1.png';
import kit2 from './../../assets/images/kit2.png';
import kit3 from './../../assets/images/kit3.png';

const PlayerIcon = ({ playerName, teamColor, teamKit, playerSkillLevel }) => {
  const KITS = {
    1: kit1,
    2: kit2,
    3: kit3,
  };

  return (
    <span className='d-flex justify-content-center align-items-center flex-column'>
      <span>{playerSkillLevel}</span>
      <img
        src={KITS[teamKit]}
        style={{ backgroundColor: teamColor }}
        className='kit-logo'
        alt='player icon'
      />
      <p style={{backgroundColor: 'white'}}>{ playerName }</p>
    </span>
  );
};

export default PlayerIcon;