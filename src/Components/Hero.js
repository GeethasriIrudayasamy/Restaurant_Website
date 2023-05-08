import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import heroImg from "../assets/img/gallery-11.jpg";

const Hero = () => {
    return (
        <section className="home" id="home">
            <div className="home__container bd-grid">
                <div className="home__data">
                    <h1 className="home__title">
                        A healthy meal delivered to your door
                    </h1>
                    <h2 className="home__subtitle">
                        100% organic foods, ingredient fresh from farm. Eat
                        healthy to be healthy.
                    </h2>
                    <Link to="/menu" className="button">
                        View Menu
                    </Link>
                </div>
                <img src={heroImg} alt="" className="home__img" />
            </div>
        </section>
    );
};

export default Hero;
