import React from "react";
import "./FoodMenu.css";
import MenuData from "../Datas/menu.js";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cart-slice";

const FoodMenu = () => {
    const dispatch = useDispatch();
    let content = MenuData.map((item) => (
        <div className="product" key={item.id}>
            <img src={item.image} alt="" className="menu__img" />
            <p className="product-title">{item.name}</p>
            <div className="product-flex">
                <p className="product-text">Rs. {item.price}</p>
                <span
                    onClick={() => {
                        dispatch(
                            cartActions.addToCart({
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                image: item.image,
                            })
                        );
                    }}
                >
                    <box-icon name="cart" color="#069c54"></box-icon>
                </span>
            </div>
        </div>
    ));
    return (
        <section className="section-services" id="services">
            <h1 className="menu__title">A Treat to your taste buds</h1>
            <h1 className="heading">Our Menu</h1>
            <div className="container grid grid--4-cols">{content}</div>
        </section>
    );
};

export default FoodMenu;
