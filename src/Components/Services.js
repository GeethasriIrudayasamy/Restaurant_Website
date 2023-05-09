import React from "react";
import "./Services.css";

const Services = () => {
    const serviceList = [
        {
            id: "1",
            iconName: "infinite-outline",
            title: "Never cook again!",
            text: "We receive orders 365 days per year, even including major holidays.",
        },
        {
            id: "2",
            iconName: "nutrition-outline",
            title: "100% organic!",
            text: "Our cooks only use local, fresh, and organic products to prepare your meals.",
        },
        {
            id: "3",
            iconName: "leaf-outline",
            title: "No waste",
            text: "All our partners only use reusable containers to package all your meals.",
        },
        {
            id: "4",
            iconName: "pause-outline",
            title: "Refund policy",
            text: "Refund promised on every cancelled orders with just a nomial fee.",
        },
    ];
    return (
        <section className="section-services" id="services">
            <h1 className="heading">Our Services</h1>
            <div className="container grid grid--4-cols">
                {serviceList.map((service) => (
                    <div className="feature" key={service.id}>
                        <ion-icon
                            className="feature-icon"
                            name={service.iconName}
                        ></ion-icon>
                        <p className="feature-title">{service.title}</p>
                        <p className="feature-text">{service.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
