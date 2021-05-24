import React, { Component } from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  WMSTileLayer,
  
} from "react-leaflet";

import MapView from "../MapView/MapView.js";

class App extends Component {
  render() {
    const wmsURL = "http://ows.mundialis.de/services/service?";
    const wmsURL2 = "https://thredds.socib.es/thredds/wms/observational/hf_radar/hf_radar_ibiza-scb_codarssproc001_L1_agg/hf_radar_ibiza-scb_codarssproc001_L1_agg_best.ncd";
    const layerOption = "TOPO-OSM-WMS";
    const layerOption2 ="sea_water_velocity" ;


    
    return (
      <MapContainer
        center={[12.9716, 77.5946]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <WMSTileLayer url={wmsURL} layers={layerOption} ></WMSTileLayer>
      </MapContainer>
    );
  }
}

export default App;
