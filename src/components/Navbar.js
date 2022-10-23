import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom";

export class Navbar extends Component {

    static propTypes = {}

    render() {
        
        return (
            <>
            <div >
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" >
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">NewsDaddy</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <NavLink className={`nav-link ${({isActive}) => isActive ? 'active' : ''}`} aria-current="page" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${({isActive}) => isActive ? 'active' : ''}}`} to="/business">Business</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${({isActive}) => isActive ? 'active' : ''}}`} to="/entertainment">Entertainment</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${({isActive}) => isActive ? 'active' : ''}}`} to="/general">General</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${({isActive}) => isActive ? 'active' : ''}}`} to="/health">Health</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${({isActive}) => isActive ? 'active' : ''}}`} to="/science">Science</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${({isActive}) => isActive ? 'active' : ''}}`} to="/sports">Sports</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${({isActive}) => isActive ? 'active' : ''}}`} to="/technology">technology</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                </div>
            </>
        )
    }
}

export default Navbar