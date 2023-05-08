import React from "react";
import "./FoodMenu.css";
import MenuData from "../Datas/menu.js";

const FoodMenu = () => {
    let content = MenuData.map((item) => (
        <div className="product" key={item.id}>
            <img src={item.image} alt="" className="menu__img" />
            <p className="product-title">{item.name}</p>
            <div className="product-flex">
                <p className="product-text">Rs. {item.price}</p>
                <box-icon name="cart" color="#069c54"></box-icon>
            </div>
        </div>
    ));
    return (
        <section className="section-services" id="services">
            <h1 className="heading">Our Menu</h1>
            <div className="container grid grid--4-cols">{content}</div>
        </section>
    );
};

export default FoodMenu;
