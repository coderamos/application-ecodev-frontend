import React, { useState } from "react";
import { TileLayer, Marker } from "react-leaflet";

import { MapWrapper } from "./styles";

interface MapProps {
  zoom?: number;
  initialPosition?: [number, number];
  selectedPosition?: [number, number];

  onClick?(event: any): any;
}

const Map: React.FC<MapProps> = ({
  zoom,
  initialPosition,
  selectedPosition,
  onClick,
}) => {
  return (
    <MapWrapper center={initialPosition} zoom={zoom} onclick={onClick}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectedPosition && <Marker position={selectedPosition} />}
    </MapWrapper>
  );
};

export default Map;
