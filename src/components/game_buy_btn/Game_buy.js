import React from "react";
import {useDispatch, useSelector} from "react-redux";
import "./game_buy.css";
import {Button} from "../button";
import {setItemInCart, deleteItemFromCart} from "../../redux/cart/reducer";

export const GameBuy = ({game}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === game.id)

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(game.id));
        } else {
            dispatch(setItemInCart(game));
        }
    }
    return (
        <div className="game_buy">
            <span className="game_buy_price">{game.price}</span>
            <Button
                type={isItemInCart ? "secondary" : "primary"}
                onClick={handleClick}
            >
                {isItemInCart ? "Убрать из корзины" : "В корзину"}
            </Button>
        </div>
    )
}