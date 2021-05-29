import React, { Component } from "react";
import './LeftVisibleMenu.css';
import MenuIcon from '@material-ui/icons/Menu';
import Search from "../Search/Search";

class MenuButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allCoordinates: this.props.JSONLocationLatLon,
            searchItemHomePage: "XXXXXXXXXX",
        }
    }

    handleSearchHomePage = (e) => {
        console.log(e.target.value);
        this.setState({ searchItemHomePage: e.target.value }, function () {
            console.log(this.state.searchItemHomePage.toUpperCase());
        });
    }

    render() {
        let filteredItem = []
        if (this.state.searchItemHomePage) {
            filteredItem = this.state.allCoordinates.filter((coordinate) =>
                coordinate.location.toUpperCase().includes(this.state.searchItemHomePage.toUpperCase()));
        }
        console.log(filteredItem);

        return (
            // <button id="leftMenuButton"
            //     onMouseDown={this.props.handleToggleLeftMenu}></button>
            <div id="lvm-container">
                <div id="lvm-button-search">
                    <MenuIcon id="lvm-show-button" onMouseDown={this.props.handleToggleLeftMenu} />
                    <Search handleSearch={this.handleSearchHomePage} className="lvm-search-bar"searchPlaceHolder="search location..." />
                </div >
                <nav id="lvm-search-location-results">
                    {filteredItem.map((coordinate, index) => {
                        return (
                            <div key={index} data-location={coordinate.location} >
                                <span onClick={this.props.handleSelectedLocation}>{coordinate.location}</span>
                            </div>
                        )
                    })}
                </nav>
            </div>
        );
    }
}

export default MenuButton;