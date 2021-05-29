import React, { Component } from 'react';
import "./RightVisibleMenu.css"

class RightVisibleMenu extends Component {
    render() {
        return (
            <div id="rightvisiblemenu-container">
                <div id="login-button" onClick={this.props.handleLogin}>
                    Icon Login
                </div>
                <nav id="overlay" className="menu iconsize-7">
                    <a href="www.google.com" >
                        <div>Radar &amp; Satellite</div>
                        <div >O</div>
                    </a>
                    <a href="www.google.com" >
                        <div>Radar &amp; Satellite</div>
                        <div >O</div>
                    </a>
                    <a href="www.google.com" >
                        <div>Radar &amp; Satellite</div>
                        <div >O</div>
                    </a>
                    <a href="www.google.com" >
                        <div>Radar &amp; Satellite rkjklwjliojij;oij;oji</div>
                        <div >O</div>
                    </a>
                    <a href="www.google.com" >
                        <div>Radar &amp; Satellite esfwrkkjoerkjtolejiwriltjwelirjt</div>
                        <div >O</div>
                    </a>
                    <a href="www.google.com" >
                        <div>Radar &amp; Satellite</div>
                        <div >O</div>
                    </a>
                    <a href="#" onMouseDown={this.props.handleToggleRightHM} >
                        <div>Mor jhgujhfgvyujfvtyfvtycftrctre </div>
                        <div >^</div>
                    </a>

                </nav>
            </div>
        );
    }
}

export default RightVisibleMenu;
