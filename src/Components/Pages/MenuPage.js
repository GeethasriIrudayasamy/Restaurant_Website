import React,{Fragment} from "react";
import FoodMenu from "../FoodMenu";
import Footer from "../Footer";
import Navbar from "../Navbar";

const MenuPage = () => {
    return (
        <Fragment>
            <Navbar />
            <FoodMenu />
            <Footer />
        </Fragment>
    );
};

export default MenuPage;
