import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <nav>
                <h1> Lorem ipsum dolor sit amet! </h1>
                <ul>
                    <li> Home </li>
                    <li> Schedule </li>
                    <li> Merchandise </li>
                    <li> Find Location </li>
                    <li> FAQ's </li>
                    <li> Contact Us </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;