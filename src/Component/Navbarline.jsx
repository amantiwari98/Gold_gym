import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbarline.css';
import logo from '../images/logo.png';

const Navbarline = () => {
    return (
        <>
            <div classNameName="container-fluid navi">
                <nav className="navbar navbar-expand-lg">
                    <NavLink className="navbar-brand" to="/"><img src={logo} alt="logo" style={{ height: '60px', width: 'auto' }} /></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home<span className="sr-only"></span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/program">Program</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/franchies">Franchies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link free" to="/services">Free Trial</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link pb-2 join" to="/services">Join Now</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbarline;