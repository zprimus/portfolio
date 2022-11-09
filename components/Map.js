// dependencies
import { useState } from "react";
import ReactMapGL from 'react-map-gl';

// data
import locations from '../lib/locations.js';

// style
import 'mapbox-gl/dist/mapbox-gl.css';

// components
import Pin from './Pin.js';

const Map = () => {
  const [viewState, setViewState] = useState({
    latitude: 17,
    longitude: 11,
    zoom: 2,
  });

  const handleViewState = (newViewState) => {
    setViewState(newViewState);
  }

  return (
    <ReactMapGL
      {...viewState}
      minZoom={2}
      maxZoom={7}
      style={{
        width: '100vw',
        height: '100vh',
      }}
      onMove={(e) => handleViewState(e.viewState)}
      mapboxAccessToken={process.env.MAPBOX_KEY}
      mapStyle={'mapbox://styles/mapbox/satellite-streets-v11'}
      doubleClickZoom={false}
    >
      {
        locations.map((location) => (
          <div key={location.id}>
            <Pin
              location={location}
              handleViewState={handleViewState}
            />
          </div>
        ))
      }
    </ReactMapGL>
  );
}

export default Map;
