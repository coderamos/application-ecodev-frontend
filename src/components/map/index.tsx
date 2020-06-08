import React from "react";
import { TileLayer, Marker } from "react-leaflet";

import { MapWrapper } from "./styles";

interface MapProps {
  center: any;
  zoom?: number;
  position: any;
  onClick?(event: any): any;
}

const Map: React.FC<MapProps> = ({ center, zoom, position, onClick }) => {
  const [markerPositionLatitude, markerPositionLongitude] = position;
  return (
    <MapWrapper center={center} zoom={zoom} onclick={onClick}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerPositionLatitude !== 0 && markerPositionLongitude !== 0 && (
        <Marker position={position} />
      )}
    </MapWrapper>
  );
};

export default Map;
