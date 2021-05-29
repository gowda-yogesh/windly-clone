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
                    {this.props.JSONLayers.map((layer, index) => {
                        return (
                            <div key={index} onClick={(e) => this.props.handleSelctedLayer(e, layer)} >
                                <div >{layer}</div>
                                <div >O</div>
                            </div>

                        );
                    })}
                    <div onMouseDown={this.props.handleToggleRightHM} >
                        <div>More</div>
                        <div >{`>`}</div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default RightVisibleMenu;
