// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// styles
import '../styles/Menu.css';

const Menu = (props) => {
        let visibility = 'show';
        props.showMenu ? visibility = 'show' : visibility = 'hide';

        return (
            <nav id="Menu" className={visibility}>
                <div className="Menu-routes">
                    <Link to="/" style={{ textDecoration: 'none' }} onClick={props.handleClickMenu}>
                        <div className="Menu-link">
                            <h2>Home</h2>
                        </div>
                    </Link>
                    <Link to ="/projects" style={{ textDecoration: 'none' }} onClick={props.handleClickMenu}>
                        <div className="Menu-link">
                            <h2>Projects</h2>
                        </div>
                    </Link>
                    <Link to ="/explore" style={{ textDecoration: 'none' }} onClick={props.handleClickMenu}>
                        <div className="Menu-link">
                            <h2>Explore</h2>
                        </div>
                    </Link>
                    <p>
                        Feel free to contact me at <b>zachary_primus@yahoo.com</b>
                    </p>
                </div>
            </nav>
        )
}

export default Menu;