import React from "react";
import {useDispatch} from "react-redux";
import {GameCover} from "../game_cover";
import {AiOutlineCloseCircle} from "react-icons/ai";
import "./order_item.css";
import {deleteItemFromCart} from "../../redux/cart/reducer";


export const OrderItem = ({game}) => {
    const dispatch = useDispatch;
    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id));
    }

    return (
        <div className="order_item">
            <div className="order_item_cover">
                <GameCover image={game.image}/>
            </div>
            <div className="order_item_title">
                <span>{game.title}</span>
            </div>
            <div className="order_item_price">
                <span>{game.price}$</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart_item_delete_icon"
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}