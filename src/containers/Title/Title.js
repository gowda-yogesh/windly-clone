import React from "react";
import './Title.css';
import logoISRO from "../../assets/ISRO-logo.jpg";

const Title = ({ title }) => {
    return (
        <div id="title" >
            <div>
                <img src={logoISRO} alt="ISRO-logo" id="logoISRO" />
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Title;