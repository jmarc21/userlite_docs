import React, { Component } from 'react';
import './home.css';

class Home extends Component {

    render() {
        return (
            <div className="home">
                <h2>Welcome to Userlite Framework Documentation</h2>
                <p>This documentation will be your guide to navigating the front and backend of userlite. From simple color pallets to complex php functions. Hopefully this can give guidence to the structure of userlite.</p>
                <h3>Getting Started</h3>
                <div className="step-container">
                    <h4>Creating a new instance</h4>
                    <p>Instances are where new clients and/or projects start. Apps are not created here. The Instance Manager will be able to manage settings and install apps, but creating Apps will be handled within the SystemAdmin portion of the Userlite. </p>
                    <ul>
                    <li>Head to <a target="_blank" href='https://www.dev.userlite.com'>www.dev.userlite.com</a> and login. From there navigate to the Instance Manager App.</li>
                    <li>Select the <b>"New Instance"</b> button, and continue through the process.</li>
                    <li>Input a Title and select a Type. For most applications <b>"Marketing Software"</b> will suffice.</li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default Home;
