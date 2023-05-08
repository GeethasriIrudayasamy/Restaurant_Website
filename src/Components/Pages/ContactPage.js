import React, { Fragment } from "react";
import Contact from "../Contact";
import Footer from "../Footer";
import Navbar from "../Navbar";

const ContactPage = () => {
    return (
        <Fragment>
            <Navbar />
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default ContactPage;
