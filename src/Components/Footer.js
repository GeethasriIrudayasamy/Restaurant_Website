import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer section bd-container">
            <span style={{ color: "#069c54" }}>
                * Only Contact us link takes you to other component
            </span>
            <div className="footer__container bd-grid">
                <div className="footer__content">
                    <h3 className="footer__title">Services</h3>
                    <ul>
                        <li>
                            <a href="/" className="footer__link">
                                Delivery
                            </a>
                        </li>
                        <li>
                            <a href="/" className="footer__link">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="/" className="footer__link">
                                Reserve your spot
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Information</h3>
                    <ul>
                        <li>
                            <Link to="/contact" className="footer__link">
                                Contact us
                            </Link>
                        </li>
                        <li>
                            <a href="/" className="footer__link">
                                Event
                            </a>
                        </li>
                        <li>
                            <a href="/" className="footer__link">
                                Privacy policy
                            </a>
                        </li>
                        <li>
                            <a href="/" className="footer__link">
                                Terms of services
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content">
                    <h3 className="footer__title">Address</h3>
                    <ul>
                        <li>Kootapalli Colony, Tiruchengode</li>
                        <li>Namakkal </li>
                        <li>777 - 777 - 777</li>
                        <li>tasty@gmail.com</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
