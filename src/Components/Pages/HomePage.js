import React, { Fragment } from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Services from "../Services";
import Footer from "../Footer";

const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <Hero />
            <Services />
            <Footer />
        </Fragment>
    );
};

export default HomePage;
