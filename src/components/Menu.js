// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import '../styles/Menu.css';

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
                    <Link to ="/explore" style={{ textDecoration: 'none' }} onClick={this.props.handleClickMenu}>
                        <div className="Menu-link">
                            <h2>Explore</h2>
                        </div>
                    </Link>
                    <Link to ="/contact" style={{ textDecoration: 'none' }} onClick={this.props.handleClickMenu}>
                        <div className="Menu-link">
                            <h2>Contact</h2>
                        </div>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Menu;