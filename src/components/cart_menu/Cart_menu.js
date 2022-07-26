import React from "react";
import "./cart_menu.css";
import {calcTotalPrice} from "../utils";
import {Button} from "../button";
import {CartItem} from "../cart_item";

export const CartMenu = ({items, onClick}) => {
    return (<div className="cart_menu">
        <div className="cart_menu_game_list">
            {
                items.length > 0 ? items.map((game) =>
                    <CartItem
                        key={game.title}
                        price={game.price}
                        title={game.title}
                        id={game.id}
                    />) : "Корзина пуста"
            }
        </div>
        {items.length > 0 ? <div className="cart_menu_arrange">
            <div className="cart_menu_total_price">
                <span>Итого:</span>
                <span>{calcTotalPrice(items)} $</span>
            </div>
            <Button type="primary" onClick={onClick}>
                Оформить заказ
            </Button>
        </div> : null}
    </div>)
}