import React, { PureComponent } from 'react';
import "./RightHiddenMenu.css";
import MenuIcon from "@material-ui/icons/Menu";
import Search from "../../containers/Search/Search"
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Scroll from "../../containers/Scroll/Scroll";



class RightHiddenMenu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            RHMOSelected: "list"
        }
    }


    render() {
        let visibility = "hide";
        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="right-flyout-menu" className={visibility}>
                <div className="mo-main-options">
                    <MenuIcon onMouseDown={this.props.handleToggleRightHM} />
                </div>
                {/* <Scroll> */}
                <nav id="rhm-all-layers">
                    <div >
                        <input type="checkbox" />
                        <span>
                            asdfas
                            </span>
                        <img alt="icon" />
                    </div>
                    <div >
                        <input type="checkbox" />
                        <span>
                            asdfas
                            </span>
                        <img alt="icon" />
                    </div>
                    <div >
                        <input type="checkbox" />
                        <span>
                            asdfas
                            </span>
                        <img alt="icon" />
                    </div>
                </nav>

                {/* </Scroll> */}
            </div>
        );
    }
}

export default RightHiddenMenu;
