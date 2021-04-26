// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import '../styles/Menu.css';

// components
import MenuButton from './MenuButton.js';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        let visibility = 'show';
        this.props.showMenu ? visibility = 'show' : visibility = 'hide';

        return (
            <nav id="Menu" className={visibility}>
                <div className="Menu-menubutton">
                    <MenuButton
                        handleClickMenu={this.props.handleClickMenu}
                        showMenu={this.props.showMenu}
                    />
                </div>
                <div className="Menu-routes">
                    <Link to="/" style={{ textDecoration: 'none' }} onClick={this.props.handleClickMenu}>
                        <div className="Menu-link">
                            <h2>Home</h2>
                        </div>
                    </Link>
                    <Link to ="/projects" style={{ textDecoration: 'none' }} onClick={this.props.handleClickMenu}>
                        <div className="Menu-link">
                            <h2>Projects</h2>
                        </div>
                    </Link>
                    <Link to ="/career" style={{ textDecoration: 'none' }} onClick={this.props.handleClickMenu}>
                        <div className="Menu-link">
                            <h2>Career</h2>
                        </div>
                    </Link>
                    <Link to ="/aboutme" style={{ textDecoration: 'none' }} onClick={this.props.handleClickMenu}>
                        <div className="Menu-link">
                            <h2>About Me</h2>
                        </div>
                    </Link>
                    <Link to ="/travel" style={{ textDecoration: 'none' }} onClick={this.props.handleClickMenu}>
                        <div className="Menu-link">
                            <h2>Travel</h2>
                        </div>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Menu;