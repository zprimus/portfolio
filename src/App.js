// dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// styles
import './styles/App.css';

// components
import MenuButton from './components/MenuButton.js';
import Menu from './components/Menu.js';

// routes
import Home from './routes/Home.js';
import Projects from './routes/Projects.js';
import ProjectTemplate from './routes/ProjectTemplate.js';
import Explore from './routes/Explore.js';
import Contact from './routes/Contact.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState({showMenu: !this.state.showMenu});
  }

  handleClickMenu = () => {
    this.toggleMenu();

    console.log("showMenu: " + this.state.showMenu);
    //e.stopPropagation();
  }

  render() {
    return (
      <div className="App">
        
        <Router>
          <div className="App-body">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/projects" exact component={Projects}/>
              <Route path="/projects?id=:id" exact component={ProjectTemplate}/>
              <Route path="/explore" exact component={Explore}/>
              <Route path="/contact" exact component={Contact}/>
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