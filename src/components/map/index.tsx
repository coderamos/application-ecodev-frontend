import React from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";

import { MapWrapper } from "./styles";

interface MapProps {
  center: any;
  zoom?: number;
  position: any;
}

const Map: React.FC<MapProps> = ({ center, zoom, position }) => {
  return (
    <MapWrapper center={center} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} />
    </MapWrapper>
  );
};

export default Map;
