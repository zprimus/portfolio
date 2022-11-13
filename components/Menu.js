// dependencies
import React from 'react';
import Link from 'next/link';

// styles

const Menu = ({showMenu, handleClickMenu}) => {
    return (
        <nav id="Menu" className={showMenu ? 'show' : 'hide'}>
            <div className="Menu-routes">
                <Link href="/">
                    <div className="Menu-link" onClick={handleClickMenu}>
                        <h2>Home</h2>
                    </div>
                </Link>
                <Link href="/projects">
                    <div className="Menu-link" onClick={handleClickMenu}>
                        <h2>Projects</h2>
                    </div>
                </Link>
                <Link href="/explore">
                    <div className="Menu-link" onClick={handleClickMenu}>
                        <h2>Explore</h2>
                    </div>
                </Link>
            </div>
            <p>
                Feel free to contact me at <b>zachary_primus@yahoo.com</b>
            </p>
        </nav>
    )
}

export default Menu;