import React, { PureComponent } from "react";
import "./LeftMenu.css";
import LeftMenuOptions from "../LeftMenuOptions/LeftMenuOptions";
import LMOMenu from "../LMOMenu/LMOMenu"
import LMOSettings from "../LMOSettings/LMOSettings"

class LeftMenu extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            leftMenuOptionsSelected: "menu"
        }

    }

    handleLMOChange = (event) => {
        console.log(event.target.innerText)
        const selectedOption = event.target.innerText.toLowerCase();
        this.setState({
            leftMenuOptionsSelected: selectedOption,
        });

    }

    render() {
        let visibility = "hide";
        let selection = null;
        if (this.props.menuVisibility) {
            visibility = "show";
        }

        switch (this.state.leftMenuOptionsSelected) {
            case "menu":
                selection = <LMOMenu />
                break;
            case "favorites":
                selection = null
                break;

            case "setting":
                selection = <LMOSettings />
                break;

            default:
                selection = <LMOMenu />
        }

        return (
            <div id="left-flyout-menu" className={visibility}>
                <LeftMenuOptions handleToggleLeftMenu={this.props.handleToggleLeftMenu} handleLMOChange={this.handleLMOChange} />
                {selection}

            </div>
        );
    }
}

export default LeftMenu;
