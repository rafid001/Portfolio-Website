import React from 'react';
import {Link} from 'react-router-dom'
const Header = ()=>{
    return(
        <div>
            <div className="header_container">
                <Link to="/">
                    <h1>Rafid</h1>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <a href="#work">Projects</a>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                        <li>
                            <a href="/#end">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
