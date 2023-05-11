import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../Store/cart-slice";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.cartList);

    const orderTotal = cartItems.reduce((accumulator, object) => {
        return accumulator + object.totalPrice;
    }, 0);

    let content;
    if (cartItems.length > 0) {
        content = (
            <div>
                {cartItems.map((item) => (
                    <div className="item" key={item.id}>
                        <div className="image">
                            <img src={item.image} alt="" />
                        </div>

                        <div className="description">
                            <span>{item.name}</span>
                        </div>

                        <div className="quantity">
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
                            <span>{item.quantity}</span>
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
                        </div>
                        <div className="total-price">Rs {item.totalPrice}</div>
                    </div>
                ))}
                <span className="cart_order">
                    <div className="cart_total ">
                        <span style={{ marginRight: "1rem" }}>
                            Order Total:
                        </span>
                        Rs {orderTotal}
                    </div>
                    <button
                        className="cart_order_button"
                        onClick={() => {
                            props.onSubmit();
                        }}
                    >
                        Place Order
                    </button>
                </span>
            </div>
        );
    } else {
        content = <p className="empty-cart">Your Cart is empty</p>;
    }
    return (
        <Fragment>
            <span className="back_icon" onClick={() => navigate("/menu")}>
                <box-icon name="arrow-back" color="#333"></box-icon>
            </span>
            <div className="shopping-cart">
                <div className="title">Food Package</div>
                {content}
            </div>
        </Fragment>
    );
};

export default Cart;
