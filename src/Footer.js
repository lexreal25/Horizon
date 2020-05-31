// JavaScript source cod
import React, { Component } from 'react';
import './App.css';

class Footer extends React.Component {
    render() {
        return (

            <section className="footer">
                <div className="footer-content">
                    <div className="f-content">
                        <h5>VISIT US IN KENYA</h5>
                        <h6>Nairobi,Kenya</h6>
                        <p className="text"> 
                            Belgravia Centre, 14 Riverside drive, 
                            4th floor, Off Riverside Drive 
                            Hanover Centre, 14 Riverside Drive, 
                            6th floor, Off Riverside Drive
                         </p>
                    </div>

                    <div className="f-content">
                        <h5>VISIT US IN GHANA</h5>
                        <h6>Accra,Ghana</h6>
                        <p>One Airport Square, 8th Floor-Airpot City</p>
                    </div>

                    <div className="f-content">
                        <h5>VISIT US IN NIGERIA</h5>
                        <h6>Lagos,Nigeria</h6>
                        <p>Sterling Bank Building</p>
                        
                    </div>    
                </div>
                <div className="f-base">
                    <p> &copy 2020 copyright: Horizon.com</p>
                </div>
            </section>

            );
    }
}

export default Footer;