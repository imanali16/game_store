import React from "react";
import {Link} from "react-router-dom";
import "./header.css";
import {CartBlock} from "../cart_block";


export const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Link to="/" className="header_store_title">Game Store</Link>
            </div>
            <div className="wrapper header_cart_btn">
                <CartBlock/>
            </div>
        </div>
    )
}