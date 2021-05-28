import React, { PureComponent } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, WMSTileLayer, } from "react-leaflet";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Title from '../../containers/Title/Title';
import LeftVisibleMenu from "../../containers/LeftVisibleMenu/LeftVisibleMenu"
import LeftMenu from "../LeftMenu/LeftMenu"
import RightVisibleMenu from "../RightVisibleMenu/RightVisibleMenu";
import RightHiddenMenu from "../RightHiddenMenu/RightHiddenMenu"
// import ISROLogo from "../../assets/ISRO-logo.png"


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      rightHiddenMenuVisible: false,
      selectedLocation: "Bangalore"
    };
  }


  handleToggleLeftMenu = (e) => {
    this.toggleLeftMenu();

    console.log("clicked");
    e.stopPropagation();
  };
  handleToggleRightHM = (e) => {
    this.toggleRightHM();

    console.log("clicked2");
    e.stopPropagation();
  };

  toggleLeftMenu = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  toggleRightHM = () => {
    this.setState({
      rightHiddenMenuVisible: !this.state.rightHiddenMenuVisible,
    });
  };

  handleSelectedLocation = (e) => {
    console.log(e.target);
    console.log(e.target.innerText);
    // this.setState({ selectedLocation: e.target.value }, function () {
    //   console.log(this.state.selectedLocation.toUpperCase());
    // });
  }
  render() {
    const wmsURL = "http://ows.mundialis.de/services/service?";
    const layerOption = "TOPO-OSM-WMS";
    // const wmsURL2 =
    //   "https://thredds.socib.es/thredds/wms/observational/hf_radar/hf_radar_ibiza-scb_codarssproc001_L1_agg/hf_radar_ibiza-scb_codarssproc001_L1_agg_best.ncd";
    // const layerOption2 = "sea_water_velocity";

    return (
      <>
        <ErrorBoundry>
          <div id="app-container">
            <LeftVisibleMenu handleToggleLeftMenu={this.handleToggleLeftMenu} handleSelectedLocation={this.handleSelectedLocation} />
            <LeftMenu handleToggleLeftMenu={this.handleToggleLeftMenu}
              menuVisibility={this.state.visible} />
            <Title title="ISTRAC" />
            <RightVisibleMenu handleToggleRightHM={this.handleToggleRightHM} />
            <RightHiddenMenu handleToggleRightHM={this.handleToggleRightHM}
              menuVisibility={this.state.rightHiddenMenuVisible} />
          </div>
          <div id="map-container">
            <MapContainer
              center={[12.9716, 77.5946]}
              zoom={6}
              scrollWheelZoom={true}
            >
              <WMSTileLayer url={wmsURL} layers={layerOption}></WMSTileLayer>
            </MapContainer>
          </div>
        </ErrorBoundry>
      </>
    );
  }
}

export default App;
