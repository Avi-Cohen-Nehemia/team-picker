import React from "react";
import kit1 from './../../assets/images/kit1.png';
import kit2 from './../../assets/images/kit2.png';
import kit3 from './../../assets/images/kit3.png';

const PlayerIcon = ({ playerName, teamColor, teamKit }) => (
    <>  
        <span style={{ backgroundColor: teamColor }}>
            <img
                src={ teamKit === 1 ? kit1 : (teamKit === 2 ? kit2 : kit3) }
                height="50px"
                width="50px"
            />
        </span>
        <p>{ playerName }</p>
    </>
);

export default PlayerIcon;