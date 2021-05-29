import React, { Component } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, WMSTileLayer, TileLayer, Marker, Popup, LayersControl, LayerGroup, Circle, FeatureGroup, Rectangle } from "react-leaflet";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import Title from '../../containers/Title/Title';
import LeftVisibleMenu from "../../containers/LeftVisibleMenu/LeftVisibleMenu"
import LeftMenu from "../LeftMenu/LeftMenu"
import RightVisibleMenu from "../RightVisibleMenu/RightVisibleMenu";
import RightHiddenMenu from "../RightHiddenMenu/RightHiddenMenu"
// import ISROLogo from "../../assets/ISRO-logo.png"


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      rightHiddenMenuVisible: false,
      wmsURL: "http://ows.mundialis.de/services/service?",
      selectedLocationData: {
        location: "Bangalore",
        coordinates: [12.9716, 77.5946]
      },
      selectedLayer: "SRTM30-Colored-Hillshade",
      JSONLocationLatLon: [
        {
          location: "Bangalore",
          coordinates: [12.9716, 77.5946]
        },
        {
          location: "Chennai",
          coordinates: [13.0827, 80.2707]
        },
        {
          location: "Mysuru",
          coordinates: [12.2958, 76.6394]
        },
        {
          location: "Germany",
          coordinates: [51.1657, 10.4515]
        },
        {
          location: "Miami",
          coordinates: [25.7617, 80.1918]
        },
        {
          location: "Australia",
          coordinates: [-24.537724645016407, 134.30415989242238]
        },
        {
          location: "ISRTAC",
          coordinates: [13.03595384592515, 77.51218442328]
        },
        {
          location: "SPACE-X",
          coordinates: [33.921046275761846, -118.3280353317405]
        },
      ],
      JSONLayers: [
        "TOPO-WMS",
        "SRTM30-Colored-Hillshade",
        "OSM-Overlay-WMS",
        "TOPO-WMS,OSM-Overlay-WMS",
        "OSM-Overlay-WMS,TOPO-WMS"
      ]
    };
  }


  handleLogin = (e) => {
    alert("Login functionality not wet added")
  }

  handleToggleLeftMenu = (e) => {
    this.toggleLeftMenu();

    console.log("clicked");
    e.stopPropagation();
  };

  handleToggleRightHM = (e) => {
    console.log("clicked2");
    this.toggleRightHM();

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
    let filteredItem = []
    if (e.target.innerText) {
      filteredItem = this.state.JSONLocationLatLon.filter((locationData) =>
        locationData.location.toUpperCase() === e.target.innerText.toUpperCase());
    }
    this.setState({ selectedLocationData: filteredItem[0] },
      function () {
        console.log("Selected Location Data in App.js=\t", this.state.selectedLocationData)
      })
  }

  handleSelctedLayer = (e, layer) => {
    console.log(e.target);
    console.log(layer);
    this.setState({ selectedLayer: layer }, function () {
      console.log(" App.js - Selected Layer=\t", this.state.selectedLayer)
      // window.location.reload(false)
    })
  }

  render() {
    console.log("Render - App.js Selected Location Data in =\t", this.state.selectedLocationData)
    console.log("Render - App.js - Selected Layer=\t", this.state.selectedLayer)
    const wmsURL = this.state.wmsURL;
    const layerOption = this.state.selectedLayer;
    const { location, coordinates } = this.state.selectedLocationData;
    const position = coordinates;
    const text = location;
    const center = position
    // const wmsURL = "http://ows.mundialis.de/services/service?";
    // const position = [13.0827, 80.2707];
    // const layerOption = "TOPO-OSM-WMS";
    // const wmsURL2 =
    //   "https://thredds.socib.es/thredds/wms/observational/hf_radar/hf_radar_ibiza-scb_codarssproc001_L1_agg/hf_radar_ibiza-scb_codarssproc001_L1_agg_best.ncd";
    // const layerOption2 = "sea_water_velocity";

    return (
      <>
        <ErrorBoundry>
          <div id="app-container">
            <LeftVisibleMenu handleToggleLeftMenu={this.handleToggleLeftMenu} handleSelectedLocation={this.handleSelectedLocation} JSONLocationLatLon={this.state.JSONLocationLatLon} />
            <LeftMenu handleToggleLeftMenu={this.handleToggleLeftMenu}
              menuVisibility={this.state.visible} />
            <Title title="ISTRAC" />
            <RightVisibleMenu handleToggleRightHM={this.handleToggleRightHM} handleLogin={this.handleLogin} />
            <RightHiddenMenu handleToggleRightHM={this.handleToggleRightHM}
              menuVisibility={this.state.rightHiddenMenuVisible} JSONLayers={this.state.JSONLayers} handleSelctedLayer={this.handleSelctedLayer} />
          </div>
          <div id="map-container">
            <MapContainer
              center={position}
              zoom={6}
              scrollWheelZoom={true}
            >
              <WMSTileLayer url={wmsURL} layers={layerOption}></WMSTileLayer>
              <Marker position={position}>
                <Popup>
                  {text}
                </Popup>
              </Marker>
            </MapContainer>
            {/* <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
              <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </LayersControl.BaseLayer>

                <LayersControl.Overlay checked name="Layer group with circles">
                  <LayerGroup>
                    <Circle
                      center={center}
                      pathOptions={{ fillColor: 'blue' }}
                      radius={400}
                    />
                    <Circle
                      center={center}
                      pathOptions={{ fillColor: 'red' }}
                      radius={100}
                      stroke={false}
                    />
                  </LayerGroup>
                </LayersControl.Overlay>
              </LayersControl>
            </MapContainer>, */}
          </div>
        </ErrorBoundry>
      </>
    );
  }
}

export default App;
