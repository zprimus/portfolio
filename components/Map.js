// dependencies
import { useState } from "react";
import ReactMapGL from 'react-map-gl';
import 'dotenv';

// data
import locations from '../lib/data/locations.js';

// styles
import 'mapbox-gl/dist/mapbox-gl.css';

// components
import Pin from './Pin.js';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 17,
    longitude: 11,
    zoom: 2,
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
      mapStyle={'mapbox://styles/mapbox/satellite-streets-v11'}
    >
      {
        locations.map((location) => (
          <Pin
            location={location}
          />
        ))
      }
    </ReactMapGL>
  );
}

export default Map;
