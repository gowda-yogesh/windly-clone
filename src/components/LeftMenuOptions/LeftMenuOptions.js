import React, { PureComponent } from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import "./LeftMenuOptions.css"

class LeftMenuOptions extends PureComponent {
    render() {
        return (
            <div id="lmo-container">
                <div className="lmo-main-options" onClick={this.props.handleLMOChange}>Menu</div>
                <div className="lmo-main-options" onClick={this.props.handleLMOChange}>Favorites</div>
                <div className="lmo-main-options" onClick={this.props.handleLMOChange}>Setting</div>
                <div className="lmo-main-options">
                    <MenuIcon onMouseDown={this.props.handleToggleLeftMenu} />
                </div>
            </div>
        );
    }
}

export default LeftMenuOptions;
