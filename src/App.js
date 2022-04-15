// dependencies
import React, { useState } from 'react';
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
import ExploreTemplate from './routes/ExploreTemplate.js';

// data 
import projects from './data/projects';
import locations from './data/locations';

const renderProjectRoutes = () => {
  return (projects.map(({id}) => 
    <Route 
      key={id} 
      path={`/projects/${id}`} 
      render={() => (
        <ProjectTemplate/>
      )}/>
  ))
}

const renderExploreRoutes = () => {
  return (locations.map(({id}) => 
    <Route 
      key={id} 
      path={`/explore/${id}`} 
      render={() => (
        <ExploreTemplate/>
      )}
    />
  ))
}

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleClickMenu = () => {
    toggleMenu();
  }

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
            {renderExploreRoutes()}
          </Switch>
        </div>
        <div className="App-menubutton">
          <MenuButton
            handleClickMenu={handleClickMenu}
            showMenu={showMenu}
          />
        </div>
        <Menu
          handleClickMenu={handleClickMenu}
          showMenu={showMenu}
        />
      </Router>
    </div>
  );
}

export default App;