import React, { PureComponent } from 'react';
import "./LeftMenuOptions.css"

class LeftMenuOptions extends PureComponent {
    // constructor(props) {
    //     super(props);
    //     this.state = { bgColor: "yellow" }
    // }
    // handleClick = () => {
    //     this.setState({
    //         bgColor: 'blue'
    //     })
    // }
    render() {
        const options = ["Menu", "Favorites", "Setting"];

        const { handleToggleLeftMenu, leftMenuOptionsSelected, handleLMOChange } = this.props;
        return (
            <>
                <div className="global-close-button" onMouseDown={handleToggleLeftMenu}>Close</div>
                <div id="lmo-container">
                    {options.map((option, index) => {
                        return (
                            <div key={index} data-option={option} className={option.toLowerCase() === leftMenuOptionsSelected.toLowerCase() ? "active lmo-main-options " : "lmo-main-options"} onClick={handleLMOChange} >{option}</div>
                        );
                    })}
                </div>
            </>
        );
    }
}

export default LeftMenuOptions;
