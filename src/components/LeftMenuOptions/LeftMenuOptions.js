import React, { PureComponent } from 'react';
import "./LeftMenuOptions.css"

class LeftMenuOptions extends PureComponent {
    render() {
        return (
            <>
                <div className="global-close-button" onMouseDown={this.props.handleToggleLeftMenu}>Close</div>
                <div id="lmo-container">
                    <div className="lmo-main-options" onClick={this.props.handleLMOChange}>Menu</div>
                    <div className="lmo-main-options" onClick={this.props.handleLMOChange}>Favorites</div>
                    <div className="lmo-main-options" onClick={this.props.handleLMOChange}>Setting</div>
                </div>
            </>
        );
    }
}

export default LeftMenuOptions;
