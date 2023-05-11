import React from "react";
import "./Modal.css";
import img from "../assets/img/Appreciation.png";

const Modal = (props) => {
    return (
        <section className="modal">
            <div className="modal__content">
                <img src={img} alt="" className="modal__img" />

                <h1 className="modal__title">{props.details.title}</h1>
                <p className="modal__description">
                    {props.details.description}
                </p>

                <button
                    className="modal__link"
                    onClick={() => {
                        props.onSubmit();
                    }}
                >
                    Close
                </button>
            </div>
        </section>
    );
};

export default Modal;
