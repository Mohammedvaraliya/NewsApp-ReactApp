import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

export class Navbar extends Component {

    static propTypes = {}

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">NewsDaddy</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className={`nav-link ${"active"}`} aria-current="page" to="/home">Home</NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className={`nav-link ${"active"}`} to="/about">About</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className={`nav-link ${"active"}`} to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${"active"}`} to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${"active"}`} to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${"active"}`} to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${"active"}`} to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${"active"}`} to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${"active"}`} to="/technology">technology</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar