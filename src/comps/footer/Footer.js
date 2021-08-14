// export default className
import React, { Component } from 'react';
import './Footer.css'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>Company</h4>
                            <ul className="list">
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Our Services</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">ABCDEFGHIJKLMNOPQRSTUVWXYZ</a></li>
                                <li><a href="/">abcdefghijklmnopqrstuvwxyz</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Get Help</h4>
                            <ul className="list">
                                <li><a href="/">FAQ</a></li>
                                <li><a href="/">Near Stadiums</a></li>
                                <li><a href="/">Schedule</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Easy Links</h4>
                            <ul className="list">
                                <li><a href="/">Watch</a></li>
                                <li><a href="/">Coaches</a></li>
                                <li><a href="/">Grounds</a></li>
                                <li><a href="/">Stores</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Follow Us</h4>
                            <div className="sociallinks">
                                <a className="sociallink" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="sociallink" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="sociallink" href="/"><i className="fab fa-instagram"></i></a>
                                <a className="sociallink" href="/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <p>&copy;2020 Real AI. All Rights Reserved.</p>
                </div>
            </div>
        );
    }
}