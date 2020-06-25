import React from "react";
import kit1 from './../../assets/images/kit1.png';
import kit2 from './../../assets/images/kit2.png';
import kit3 from './../../assets/images/kit3.png';

const Kits = () => (
    <div 
        className="d-flex justify-content-around align-items-center"
        style={{
            backgroundColor: "white",
            borderRadius: "5px",
            height: "4rem"
        }}>
        <img
            src={ kit1 }
            alt="football-shirt"
            width="50"
            height="50"
        />
        <img
            src={ kit2 }
            alt="football-shirt"
            width="50"
            height="50"
        />
        <img
            src={ kit3 }
            alt="football-shirt"
            width="50"
            height="50"
        />
    </div>
);

export default Kits;