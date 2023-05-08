import React from "react";
import "./Services.css";

const Services = () => {
    return (
        <section className="section-services" id="services">
            <h1 className="heading">Our Services</h1>
            <div className="container grid grid--4-cols">
                <div className="feature">
                    <ion-icon
                        className="feature-icon"
                        name="infinite-outline"
                    ></ion-icon>
                    <p className="feature-title">Never cook again!</p>
                    <p className="feature-text">
                        We receive orders 365 days per year, even including
                        major holidays.
                    </p>
                </div>
                <div className="feature">
                    <ion-icon
                        className="feature-icon"
                        name="nutrition-outline"
                    ></ion-icon>
                    <p className="feature-title">100% organic</p>
                    <p className="feature-text">
                        Our cooks only use local, fresh, and organic products to
                        prepare your meals.
                    </p>
                </div>
                <div className="feature">
                    <ion-icon
                        className="feature-icon"
                        name="leaf-outline"
                    ></ion-icon>
                    <p className="feature-title">No waste</p>
                    <p className="feature-text">
                        All our partners only use reusable containers to package
                        all your meals.
                    </p>
                </div>
                <div className="feature">
                    <ion-icon
                        className="feature-icon"
                        name="pause-outline"
                    ></ion-icon>
                    <p className="feature-title">Refund policy</p>
                    <p className="feature-text">
                        Refund promised on every cancelled orders with just a
                        nomial fee.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
