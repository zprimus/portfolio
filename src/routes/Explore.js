// dependencies
import React from 'react';

// styles
import '../styles/Explore.css';

// components
import MapChart from '../components/MapChart.js';
import ImgSlider from '../components/ImgSlider.js'
import ClearButton from '../components/ClearButton.js';

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

  handleClear = () => {
    this.setState({location:
      {
        id: '',
        name: '',
        marker: {},
        info: {}
      }
    })
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
          <div className="Explore-clearbutton">
            <ClearButton
              url='/explore'
              hasInfo={Object.keys(this.state.location.info).length > 0}
              handleClick={this.handleClear}
            />
          </div>
          {
            Object.keys(this.state.location.info).length > 0 &&
            <div id="info">
              <hr/>
              <div className="Explore-info">
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
              </div>
            </div>
          }
      </div>
    );
  }
}

export default Explore;