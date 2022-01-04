// dependencies
import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// data
import locations from '../data/locations.js';

// styles
import '../styles/MapChart.css';
import 'leaflet/dist/leaflet.css';

class MapChart extends React.Component {
  render() {
    return (
      <div className="MapChart">
        <MapContainer
          center={[28.0395, -81.9498]}
          zoom={6}
          minZoom={4}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
          bounds={[
            {
              lat: 33.100745405144245,
              lng: 24.510498046875
            },
            {
              lat: 33.100745405144245,
              lng: 46.48315429687501
            },
            {
              lat: 44.55916341529184,
              lng: 46.48315429687501
            },
            {
              lat: 44.55916341529184,
              lng: 24.510498046875
            }
          ]}
          maxBounds={[-90, -180], [90, 180]}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            locations.map((location) => (
              <Link key={location.name} to ="#info" style={{ textDecoration: 'none' }} onClick={() => this.props.handleQuery(location)}>
                <Marker position={location.marker.coordinates}>
                  <Popup>
                    {location.name}
                  </Popup>
                </Marker>
              </Link>
            ))
          }
        </MapContainer>
      </div>
    );
  };
}

export default MapChart;
