import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';

function Navbar () {
    return(
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid ">
                    <div className="name">VV</div>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav text-center">
                            <Link className="nav-link" to="/">About</Link>
                            <Link className="nav-link" to="/skills">Skills</Link>
                            {/*<Link className="nav-link" to="/projects">Projects</Link>*/}
                            <Link className="nav-link" to="/experience">Experience</Link>
                            <Link className="nav-link" to="/contacts">Contact Me</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;