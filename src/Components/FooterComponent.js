import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row justify-content-center"> 
                    <div className="col col-sm-4 text-center">
                        <h5>Call or Email</h5>
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-773-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> chicagoegg@gmail.com</a>
                    </div>          
                    <div className="col col-sm-2 text-center">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/findadonor'>Donor List</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col col-sm-4 text-center">
                        <h5>Social</h5>
                        <a id="social" className="btn btn-social-icon btn-instagram" target="_blank" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a id="social" className="btn btn-social-icon btn-facebook" target="_blank" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a id="social" className="btn btn-social-icon btn-twitter" target="_blank" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a id="social" className="btn btn-social-icon btn-google" target="_blank" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;