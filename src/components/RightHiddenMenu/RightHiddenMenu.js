import React, { PureComponent } from "react";
import "./RightHiddenMenu.css";
import Search from "../../containers/Search/Search";
// import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
// import Scroll from "../../containers/Scroll/Scroll";

class RightHiddenMenu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            RHMOSelected: "list",
            searchItemRHM: "",
            viewLayers: ["Q", "W", "R", "wearwr", "aaaaa"],
        };
    }

    handleSearchRHM = (event) => {
        console.log(event.target);
        console.log(event.target.value);
        this.setState({ searchItemRHM: event.target.value }, function () {
            console.log(this.state.searchItemRHM.toUpperCase());
        });
    };

    render() {
        let visibility = "hide";
        if (this.props.menuVisibility) {
            visibility = "show";
        }

        const filteredItem = this.state.viewLayers.filter((layer) =>
            layer.toUpperCase().includes(this.state.searchItemRHM.toUpperCase())
        );
        console.log(filteredItem);

        return (
            <div id="right-flyout-menu" className={visibility}>
                <div className="global-close-button" onMouseDown={this.props.handleToggleRightHM} >

                    Close
                </div>
                <Search handleSearch={this.handleSearchRHM} />
                {/* <Scroll> */}

                <nav id="rhm-all-layers">
                    {filteredItem.map((layer, index) => {
                        return (
                            <div key={index}>
                                <input type="checkbox" />
                                <span>{layer}</span>
                                <img alt="icon" />
                            </div>
                        );
                    })}
                </nav>

                {/* </Scroll> */}
            </div>
        );
    }
}

export default RightHiddenMenu;
