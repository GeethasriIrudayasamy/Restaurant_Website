import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    const path = location.pathname;

    const menuHandler = () => {
        setShowMenu((prevValue) => !prevValue);
        // console.log(showMenu);
    };
    return (
        <header className="l-header" id="header">
            <nav className="nav bd-container">
                <Link to="/" className="nav__logo">
                    <h1>Tasty</h1>
                </Link>

                <div
                    className={showMenu ? "nav__menu show-menu" : "nav__menu"}
                    id="nav-menu"
                >
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link
                                to="/"
                                className={
                                    path === "/"
                                        ? "nav__link active"
                                        : "nav__link"
                                }
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to="/menu"
                                className={
                                    path === "/menu"
                                        ? "nav__link active"
                                        : "nav__link"
                                }
                            >
                                Food Menu
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to="/contact"
                                className={
                                    path === "/contact"
                                        ? "nav__link active"
                                        : "nav__link"
                                }
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="nav__cart">
                    <Link
                        to="/cart"
                        className={
                            path === "/cart"
                                ? "nav__link cart active"
                                : "nav__link cart"
                        }
                    >
                        <div className="cart">
                            <box-icon name="cart" color="#069c54"></box-icon>
                            <span className="badge">5</span>
                        </div>
                    </Link>
                </div>
                <div
                    className="nav__toggle"
                    id="nav-toggle"
                    onClick={menuHandler}
                >
                    <box-icon name={showMenu ? "x" : "menu"}></box-icon>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
