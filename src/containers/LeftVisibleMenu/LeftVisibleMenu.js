import React, { Component } from "react";
import './LeftVisibleMenu.css';
import MenuIcon from '@material-ui/icons/Menu';
import Search from "../Search/Search";

class MenuButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locationLonLat: ["Bangalore", "W", "R", "wearwr", "aaaaa"],
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
            filteredItem = this.state.locationLonLat.filter((location) =>
                location.toUpperCase().includes(this.state.searchItemHomePage.toUpperCase()));
        }
        console.log(filteredItem);

        return (
            // <button id="leftMenuButton"
            //     onMouseDown={this.props.handleToggleLeftMenu}></button>
            <div id="lvm-container">
                <div id="lvm-button-search">
                    <MenuIcon id="lvm-show-button" onMouseDown={this.props.handleToggleLeftMenu} />
                    <Search handleSearch={this.handleSearchHomePage} className="lvm-search-bar" />
                </div >
                <nav id="lvm-search-location-results">
                    {filteredItem.map((location, index) => {
                        return (
                            <div key={index} data-location={location} >
                                <span onClick={this.props.handleSelectedLocation}>{location}</span>
                            </div>
                        );
                    })}
                </nav>
            </div>
        );
    }
}

export default MenuButton;