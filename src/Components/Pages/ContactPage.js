import React, { Fragment } from "react";
import Contact from "../Contact";
import Footer from "../Footer";
import Navbar from "../Navbar";

const ContactPage = (props) => {
    return (
        <Fragment>
            <Navbar />
            <Contact onSubmit={props.onSubmit} />
            <Footer />
        </Fragment>
    );
};

export default ContactPage;
