// dependencies
import { useState } from "react";
//import { HashLink as Link } from 'react-router-hash-link';
import ReactMapGL from 'react-map-gl';
import 'dotenv';

// styles
import '../styles/MapChart.css';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
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
    />
  );
}

export default Map;
