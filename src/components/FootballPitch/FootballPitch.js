import React from "react";
import footballPitch from './../../assets/images/footballPitch.jpg';

const FootballPitch = () => (
    <>
        <div
            className="d-flex justify-content-center align-items-center"
        >
            <img
                src={ footballPitch }
                alt="football pitch"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
            />
        </div>
    </>
);

export default FootballPitch;