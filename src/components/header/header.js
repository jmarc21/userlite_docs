import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import config from '../../config.js';
import logo from './userlite_logo.png';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        var header_tabs = config.header_tabs;

        var tabs = Object.keys(header_tabs).map((e,i) => {
            var link = e;
            if (!e.includes('/')) {
                link = '/' + e;
            }
            if (header_tabs[e].heading) {
                return <div key={i} className="header-menu-links header-menu-headings">{'<' + header_tabs[e].title + '/>'}</div>
            }else{
                return <NavLink exact to={link} activeClassName='header-active' style={{textDecoration: 'none', color: 'black'}} key={i} className="header-menu-links">{header_tabs[e].title}</NavLink>
            }
        })

        return (
            <div className="header">
                <div className="header-logo" style={{backgroundImage: "url(" + logo + ")"}}></div>
                <div className="header-menu">
                    {tabs}
                </div>
            </div>
        );
    }
}

export default Header;
