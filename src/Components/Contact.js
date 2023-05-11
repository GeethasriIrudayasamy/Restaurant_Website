import React, { Fragment } from "react";
import "./Contact.css";

const Contact = (props) => {
    const submitHandler = (e) => {
        e.preventDefault();
        props.onSubmit();
    };
    return (
        <Fragment>
            <h1 className="contact-heading">Please fill in your credentials</h1>
            <form onSubmit={submitHandler} className="form-control">
                <div>
                    <label className="form-label">Name</label>
                    <input type="text" required />
                </div>
                <div>
                    <label className="form-label">Contact Number</label>
                    <input type="tel" pattern="[0-9]{10}" required />
                </div>
                <div>
                    <label className="form-label" required>
                        Location
                    </label>
                    <input type="text" />
                </div>
                <button className="btn">Submit</button>
            </form>
        </Fragment>
    );
};

export default Contact;
