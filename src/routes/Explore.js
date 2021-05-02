// dependencies
import React from 'react';

// styles
import '../styles/Explore.css';

// components
import MapChart from '../components/MapChart.js';

class Explore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {
        id: '',
        marker: {},
        info: {}
      }
    }
  }

  handleQuery = (location) => {
    console.log(location)
    this.setState({location: location});

    
  }

  render() {
    return (
      <div className="Explore">
          <header className="Explore-map">
            <MapChart
              handleQuery={this.handleQuery}
              id={this.state.location.id}
            />
          </header>
          {
            Object.keys(this.state.location.info).length > 0 &&
            <body id="info">
              <hr/>
              <section>
                <div>
                  <h1>{this.state.location.info.name}</h1>
                  <p>{this.state.location.info.relation}</p>
                  <hr/>
                </div>
                <div>
                  <h3>General Info</h3>
                  
                  <ul>
                    <li>Time spent: {this.state.location.info.duration}</li>
                    
                  </ul>
                  <hr/>
                </div>
                <div>
                  <h3>img</h3>
                  <hr/>
                </div>
                <div>
                  <h3>Details</h3>
                  <p>{this.state.location.info.desc1}</p>
                  <p>{this.state.location.info.desc2}</p>
                </div>
              </section>
            </body>
          }
      </div>
    );
  }
}

export default Explore;