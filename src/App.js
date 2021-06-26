// dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// styles
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import MenuButton from './components/MenuButton.js';
import Menu from './components/Menu.js';

// routes
import Home from './routes/Home.js';
import Projects from './routes/Projects.js';
import ProjectTemplate from './routes/ProjectTemplate.js';
import Explore from './routes/Explore.js';

// data 
import projects from './data/projects';

function renderProjectRoutes() {
  return (projects.map(({id}) => 
    <Route 
      key={id} 
      path={`/projects/${id}`} 
      render={() => (
        <ProjectTemplate
          project={'portfolio'}
        />
      )}/>
  ))
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);
  }

  toggleMenu() {
    this.setState({showMenu: !this.state.showMenu});
  }

  handleClickMenu() {
    this.toggleMenu();
  }

  

  render() {
    return (
      <div className="App">
        <Router
          basename="/"
        >
          <div className="App-body">
            <Switch>
              <Route path="/" exact={true} component={Home}/>
              <Route path="/projects" exact={true} component={Projects}/>
              {renderProjectRoutes()}
              <Route path="/explore" exact={true} component={Explore}/>
            </Switch>
          </div>
          <div className="App-menubutton">
            <MenuButton
              handleClickMenu={this.handleClickMenu}
              showMenu={this.state.showMenu}
            />
          </div>
          <Menu
            handleClickMenu={this.handleClickMenu}
            showMenu={this.state.showMenu}
          />
        </Router>
      </div>
    );
  }
}

export default App;