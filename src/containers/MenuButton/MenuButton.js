import React, { Component } from "react";
import './MenuButton.css';
import MenuIcon from '@material-ui/icons/Menu';

class MenuButton extends Component {
    render() {
        return (
            // <button id="leftMenuButton"
            //     onMouseDown={this.props.handleToggleLeftMenu}></button>
            <MenuIcon onMouseDown={this.props.handleToggleLeftMenu} />
        );
    }
}

export default MenuButton;