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
      mapboxApiAccessToken={process.env.MAPBOX_KEY}
      mapStyle={'mapbox://styles/mapbox/satellite-streets-v11'}
    >
      {
        locations.map((location) => (
          <div key={location.id}>
            <Pin
              location={location}
            />
          </div>
        ))
      }
    </ReactMapGL>
  );
}

export default Map;
