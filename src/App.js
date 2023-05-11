import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import { ClipLoader } from "react-spinners";
import "./index.css";

const ContactPage = React.lazy(() => import("./Components/Pages/ContactPage"));
const MenuPage = React.lazy(() => import("./Components/Pages/MenuPage"));
const HomePage = React.lazy(() => import("./Components/Pages/HomePage"));
const Modal = React.lazy(() => import("./UI/Modal"));

const Contact_Modal = {
    title: "Thank You!",
    description: "No details are collected",
};

const Order_Modal = {
    title: "Thank You!",
    description: "No order is placed",
};

function App() {
    const [showModal, setShowModal] = useState(false);

    const onShowModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <Suspense
            fallback={
                <div className="loader-container">
                    <ClipLoader color={"#069c54"} size={77} />
                </div>
            }
        >
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                {
                    <Route
                        path="/contact"
                        element={
                            !showModal ? (
                                <ContactPage onSubmit={onShowModal} />
                            ) : (
                                <Modal
                                    onSubmit={closeModal}
                                    details={Contact_Modal}
                                />
                            )
                        }
                    />
                }
                <Route
                    path="/cart"
                    element={
                        !showModal ? (
                            <Cart onSubmit={onShowModal} />
                        ) : (
                            <Modal
                                onSubmit={closeModal}
                                details={Order_Modal}
                            />
                        )
                    }
                />
            </Routes>
        </Suspense>
    );
}

export default App;
