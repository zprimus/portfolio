// dependencies
import { useState } from "react";
//import { HashLink as Link } from 'react-router-hash-link';
import ReactMapGL from 'react-map-gl';

// data
//import locations from '../data/locations.js';

// styles
import '../styles/MapChart.css';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <div className="MapChart">
      <ReactMapGL
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
      />
      {
        /*
        <ComposableMap
          height={mapHeight}
          width={mapWidth}
        >
          <ZoomableGroup 
            zoom={1}
            translateExtent={[
              [0, 0],
              [mapWidth, mapHeight]
            ]}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography key={geo.rsmKey} geography={geo} 
                    style={{
                      default: { outline: "none", stroke: "#C5C6C7", fill: "#0B0C10"},
                      hover: { outline: "none", stroke:"#C5C6C7", strokeWidth:"2px"},
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {
              locations.map((location) => (
                <Link to ="#info" style={{ textDecoration: 'none' }} onClick={() => this.props.handleQuery(location)}>
                  <Marker key={location.name} coordinates={location.marker.coordinates}
                    style={{
                      default: { outline: "none", fill: "#66FCF1", stroke: "#FFFFFF", strokeWidth: "0.1px", cursor: "pointer"},
                      hover: { outline: "none", fill: "#66FCF1", stroke: "#FFFFFF", strokeWidth: "0.1px", cursor: "pointer"},
                      pressed: { outline: "none", fill: "#0B0C10" },
                    }}
                  >
                    {
                      this.props.id === location.id ?
                      <circle r={1} fill="#66FCF1" stroke="#66FCF1" strokeWidth={1}/>
                      : 
                      <circle r={1} fill="#45A29E" stroke="#45A29E" strokeWidth={1}/>
                    }
                    
                    <text
                      textAnchor="middle"
                      x={location.marker.nameOffsetX}
                      y={location.marker.nameOffsetY}
                      style={
                        this.props.id === location.id ?
                        {
                          fill: "#66FCF1", stroke: "#0B0C10", strokeWidth: "0.2px"
                        } : {
                          fill: "#45A29E", stroke: "#0B0C10", strokeWidth: "0.2px"
                        }
                    }
                      fontSize="8"
                    >
                      {location.name}
                    </text>
                  </Marker>
                </Link>
              ))
            }
          </ZoomableGroup>
        </ComposableMap>
        */
      }
    </div>
  );
}

export default Map;
