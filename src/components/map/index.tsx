import React, { useState } from "react";
import { TileLayer, Marker } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";

import { MapWrapper } from "./styles";

interface MapProps {
  zoom?: number;
  initialPosition?: [number, number];
}

const Map: React.FC<MapProps> = ({ zoom, initialPosition }) => {
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [markerPositionLatitude, markerPositionLongitude] = selectedPosition;

  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }

  return (
    <MapWrapper center={initialPosition} zoom={zoom} onclick={handleMapClick}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerPositionLatitude !== 0 && markerPositionLongitude !== 0 && (
        <Marker position={selectedPosition} />
      )}
    </MapWrapper>
  );
};

export default Map;
