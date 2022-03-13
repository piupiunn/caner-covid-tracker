import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

export default function CovidMap({ casesType, countries, center, zoom }) {
  return (
    <div className="map">
      <MapContainer className="map-container" center={center} zoom={zoom}>
        <TileLayer
          className="tile-layer"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}
