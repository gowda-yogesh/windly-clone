import React, { Component } from 'react';
import { MapContainer, WMSTileLayer, TileLayer, Marker, Popup, LayersControl, LayerGroup, Circle, FeatureGroup, Rectangle } from "react-leaflet";

class DisplayMap extends Component {
    render() {

        console.log("herray.................")

        let { position, wmsURL, layerOption, text } = this.props
        const center = position
        const rectangle = [
            [51.49, -0.08],
            [51.5, -0.06],
        ]

        const fillBlueOptions = { fillColor: 'blue' }
        const fillRedOptions = { fillColor: 'red' }
        const greenOptions = { color: 'green', fillColor: 'green' }
        const purpleOptions = { color: 'purple' }
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
                            <LayerGroup>
                                <Circle center={center} pathOptions={fillBlueOptions} radius={25000} />
                                <Circle
                                    center={center}
                                    pathOptions={fillRedOptions}
                                    radius={100}
                                    stroke={false}
                                />
                                <LayerGroup>
                                    <Circle
                                        center={[51.51, -0.08]}
                                        pathOptions={greenOptions}
                                        radius={100}
                                    />
                                </LayerGroup>
                            </LayerGroup>
                        </MapContainer>
                    </div>
                    :
                    <div id="map-container">
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LayerGroup>
                                <Circle center={center} pathOptions={fillBlueOptions} radius={25000} />
                                <Circle
                                    center={center}
                                    pathOptions={fillRedOptions}
                                    radius={100}
                                    stroke={false}
                                />
                                <LayerGroup>
                                    <Circle
                                        center={[51.51, -0.08]}
                                        pathOptions={greenOptions}
                                        radius={100}
                                    />
                                </LayerGroup>
                            </LayerGroup>
                        </MapContainer>
                    </div>
                });
            </>)
    }
}

export default DisplayMap;
