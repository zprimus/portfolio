// dependencies
import React from 'react';

// styles
import '../styles/Explore.css';

// components
import MapChart from '../components/MapChart.js';

class Explore extends React.Component {
  render() {
    return (
      <div className="Explore">
        <div className="Explore-map">
          <MapChart/>
        </div>
        <body>
          
        </body>
      </div>
    );
  }
}

export default Explore;