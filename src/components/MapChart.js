// dependencies
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";
import { HashLink as Link } from 'react-router-hash-link';

// data
import locations from '../data/locations.js';

// styles
import '../styles/MapChart.css';

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const mapHeight = 500;
const mapWidth = 1000;

class MapChart extends React.Component {
  render() {
    return (
      <div className="MapChart">
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
      </div>
    );
  };
}

export default MapChart;
