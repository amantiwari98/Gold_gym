import React from 'react';
import n1 from '../images/n1.jpg';
import './Home.css';

const Footer = () => {
    return (
        <>
         <div className="container-fluid footer1">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-4">
                                <h3 className="text-uppercase" style={{ paddingTop: '35px', color: '#ffe400', fontWeight: 'bold', letterSpacing: '3px', marginBottom: '50px' }}>Quick Links</h3>
                                <ul>
                                    <li>About  Us</li>
                                    <li>Our Team</li>
                                    <li>Careers</li>
                                    <li>Work Culture</li>
                                    <li>News</li>
                                    <li>Promotions</li>
                                    <li>Events</li>
                                    <li>Amazing Offers</li>
                                    <li>Testimonials</li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h3 className="text-center text-uppercase" style={{ paddingTop: '35px', color: '#ffe400', fontWeight: 'bold', letterSpacing: '3px', marginBottom: '50px' }}>News Letter</h3>
                                <p>Sign up for our mailing list to get latest update and offers</p>
                                <label style={{ color: 'white', marginRight: '7px' }}>Email Address</label><br />
                                <input type="text" style={{ borderRadius: '2px', padding: '8px', backgroundColor: 'transparent', color: 'white', width: '100%', marginTop: '8px' }} placeholder="Email"></input>
                                <div className="row mt-5">
                                    <div className="col-md-3">
                                    <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/>
                                    </div>
                                    <div className="col-md-3">
                                    <img src="https://img.icons8.com/fluent/48/000000/twitter.png"/>
                                    </div>
                                    <div className="col-md-3">
                                    <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/>
                                    </div>
                                    <div className="col-md-3">
                                    <img src="https://img.icons8.com/office/48/000000/youtube.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h3 className="text-uppercase text-center font-weight-bold" style={{ paddingTop: '35px', color: '#ffe400', fontWeight: 'bold', letterSpacing: '3px', marginBottom: '50px' }} >Latest News</h3>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src={n1} alt="" />
                                    </div>
                                    <div className="col-md-10">
                                        <p>Plea to reopen gym, Fitness Center in Maharastra</p>
                                        <hr style={{color:'white'}} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src={n1} alt="" />
                                    </div>
                                    <div className="col-md-10">
                                        <p>Pumping iron: gym chain expects pre-covid levels in 6 months</p>
                                        <hr style={{color:'white'}} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src={n1} alt="" />
                                    </div>
                                    <div className="col-md-10">
                                        <p>Gym to be reopen in all over India after Lockdown</p>
                                        <hr style={{color:'white'}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;