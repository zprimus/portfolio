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
  const [viewport, setViewport] = useState({
    latitude: 17,
    longitude: 11,
    zoom: 2,
  });

  const handleViewportChange = (newViewport) => {
    setViewport(newViewport);
    console.log(newViewport);
  }

  return (
    <ReactMapGL
      initialViewState={viewport}
      minZoom={2}
      maxZoom={7}
      style={{
        width: '100vw',
        height: '100vh',
      }}
      onMove={(nextViewport) => handleViewportChange(nextViewport)}
      mapboxAccessToken={process.env.MAPBOX_KEY}
      mapStyle={'mapbox://styles/mapbox/satellite-streets-v11'}
    >
      {
        locations.map((location) => (
          <div key={location.id}>
            <Pin
              location={location}
              handleViewportChange={handleViewportChange}
            />
          </div>
        ))
      }
    </ReactMapGL>
  );
}

export default Map;
