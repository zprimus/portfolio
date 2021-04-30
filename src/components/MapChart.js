// dependencies
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

// data
import locations from '../data/locations.js';

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const mapHeight = 600;
const mapWidth = 800;

function handleQuery(name) {
  console.log(name);
}

function MapChart() {
  return (
    <div>
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
                    default: { outline: "none", stroke:"#000000"},
                    hover: { outline: "none", stroke:"#FFFFFF", strokeWidth:"2px"},
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          {
            locations.map(({ name, coordinates, nameOffsetX, nameOffsetY }) => (
              <Marker key={name} coordinates={coordinates} onClick={() => handleQuery(name)}
                style={{
                  hover: { outline: "none", fill: "#000000", stroke: "#FFFFFF", strokeWidth: "0.1px", cursor: "pointer"},
                  pressed: { outline: "none" },
                }}
              >
                <circle r={1} fill="#F00" stroke="#F00" strokeWidth={1} />
                <text
                  textAnchor="middle"
                  x={nameOffsetX}
                  y={nameOffsetY}

                  style={{ 
                    fill: "#000000", stroke: "#FFFFFF", strokeWidth: "0.1px"
                  }}
                  fontSize="8"
                >
                  {name}
                </text>
              </Marker>
            ))
          }
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
