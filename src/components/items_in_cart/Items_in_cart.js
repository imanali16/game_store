import React from "react";
import "./items_in_cart.css";

export const ItemsInCart = ({quantity = 0}) => {
    return quantity > 0 ? (
        <div className="items_in_cart">
            {quantity}
        </div>) : null
}