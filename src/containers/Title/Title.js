import React from "react";
import './Title.css';

const Title = ({ title }) => {
    return (
        <div id="title" >
            <div>
                <img src="../../assets/ISRO-logo.png" alt="ISRO-logo" />
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Title;