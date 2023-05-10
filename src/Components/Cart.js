import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "./Store/cart-slice";
import "./Cart.css";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartList);
    let content;
    if (cartItems.length > 0) {
        content = cartItems.map((item) => (
            <div className="item" key={item.id}>
                <div className="image">
                    <img src={item.image} alt="" />
                </div>

                <div className="description">
                    <span>{item.name}</span>
                </div>

                <div className="quantity">
                    <button
                        className="plus-btn cart-button"
                        type="button"
                        name="button"
                        onClick={() => {
                            dispatch(
                                cartActions.addToCart({
                                    id: item.id,
                                    name: item.name,
                                    price: item.price,
                                })
                            );
                        }}
                    >
                        +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                        className="minus-btn cart-button"
                        type="button"
                        name="button"
                        onClick={() => {
                            dispatch(
                                cartActions.removeFromCart({
                                    id: item.id,
                                })
                            );
                        }}
                    >
                        -
                    </button>
                </div>
                <div className="total-price">Rs {item.totalPrice}</div>
            </div>
        ));
    } else {
        content = <p className="empty-cart">Your Cart is empty</p>;
    }
    return (
        <div className="shopping-cart">
            <div className="title">Food Package</div>
            {content}
        </div>
    );
};

export default Cart;
