import React, { Component } from 'react';

//navigation bar that displays the number of counters
const navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
            </a>
        </nav>
    );
}

export default navbar;