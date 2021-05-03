// dependencies
import React from 'react';

// styles
import '../styles/Explore.css';

// components
import MapChart from '../components/MapChart.js';
import ImgSlider from '../components/ImgSlider.js'

class Explore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {
        id: '',
        name: '',
        marker: {},
        info: {}
      },
      imageSelector: 0,
    }
  }

  handleQuery = (location) => {
    console.log(location)
    this.setState({location: location});
  }

  handleImageSelector = (pos) => {
    this.setState({imageSelector: pos})
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
                  <h1>{this.state.location.name}</h1>
                  <p>{this.state.location.info.summary}</p>
                  <hr/>
                </div>
                <div>
                  <h3>General Info</h3>
                  
                  <ul>
                    <li>Time spent: {this.state.location.info.duration}</li>
                  </ul>
                  <hr/>
                </div>
                {
                  this.state.location.info.imgs.length > 0 &&
                  <div className={"Explore-slider"}>
                    <ImgSlider
                        pics={this.state.location.info.imgs}
                        imageSelector={this.state.imageSelector}
                        handleImageSelector={this.handleImageSelector}
                    />
                  </div>
                }
                
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