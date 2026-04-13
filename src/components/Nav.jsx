import React, { useState, useEffect } from 'react';
import './Nav.scss';
import DateTime from './DateTime';
const Nav = () => {
    return (
        <nav>
            <div className="left">

                <div className="nav-item name">
                    <p>Vishwaraj Singh Shekhawat</p>
                </div>
                <div className="nav-item">
                    <p>File</p>
                </div>
                <div className="nav-item">
                    <p>Window</p>
                </div>
                <div className="nav-item">
                    <p>Terminal</p>
                </div>

            </div>
            <div className="right">
                <div className="nav-icon">
                    <img src="/navbar-icon/wifi.svg" alt="" />
                </div>
                <div className="nav-item">
                    <DateTime />
                </div>
            </div>
        </nav>
    );
};

export default Nav;