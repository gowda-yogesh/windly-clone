import React, { Component } from 'react';
import { MapContainer, WMSTileLayer, TileLayer, Marker, Popup, LayersControl, LayerGroup, Circle, FeatureGroup, Rectangle } from "react-leaflet";

class DisplayMap extends Component {
    render() {

        console.log("herray.................")

        let { position, wmsURL, layerOption, text } = this.props
        return (
            <>
                { layerOption === "TOPO-WMS" ?
                    <div id="map-container">
                        <MapContainer
                            center={position}
                            zoom={6}
                            scrollWheelZoom={true}
                        >
                            <WMSTileLayer url="http://ows.mundialis.de/services/service?" layers={"TOPO-WMS"}></WMSTileLayer>
                            <Marker position={position}>
                                <Popup>
                                    {text}
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    :
                    <div id="map-container">
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                });
            </>)
    }
}

export default DisplayMap;
