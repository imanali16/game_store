import React from "react";
import "./cart_item.css";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../redux/cart/reducer";

export const CartItem = ({title, price, id}) => {
    const dispatch = useDispatch;
    const handleDeleteClick = () =>{
        dispatch(deleteItemFromCart(id));
    }
    return (
        <div className="cart_item">
            <span>{title}</span>
            <div className="cart_item_price">
                <span>{price} $</span>
                <AiOutlineCloseCircle size={15} className="cart_item_delete_icon" onClick={handleDeleteClick}/>
            </div>
        </div>)
}