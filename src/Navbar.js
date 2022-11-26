import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Events from "./Events";
import Gallery from "./Gallery";
import Home from "./Home";
import Menu from "./Menu";

const Navbar = () => {
    return (

        <>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto py-3">
                        <nav className="navbar navbar-expand-lg navbar-light main-navbar">
                            <div className="container-fluid ">
                                <NavLink className="navbar-brand" to="/">MCA RESTO WALE</NavLink>
                                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle side">
                                    <span className="navbar-toggler-icon text-white "></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link visit link" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className=" link nav-link" to="/menu">Menu</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className=" link nav-link" to="/event">Events</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className=" link nav-link" to="/gallery">Gallery</NavLink>
                                        </li><li className="nav-item">
                                            <NavLink className=" link nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className=" link nav-link" to="/contact">Contact</NavLink>
                                        </li>

                                    </ul>

                                    <NavLink to="/onlinebook"><button className="btn btn-warning" type="submit">Book A Table</button></NavLink>

                                </div>
                            </div>
                        </nav>
                    </div>

                </div>

            </div>
        </>
    );
}
export default Navbar;