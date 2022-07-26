import React from "react";
import "./order_page.css";
import {useSelector} from "react-redux";
import {OrderItem} from "../../components/order_item";
import {calcTotalPrice} from "../../components/utils";

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart);

    if (items.length < 1) {
        return <h1>Корзина пуста</h1>
    }
    return (
        <div className="order_page">
            <div className="order_page_left">
                {items.map(game => <OrderItem game={game}/>)}
            </div>
            <div className="order_page_right">
                <div className="order_page_total_price">
                    <span>{items.length} товаров на сумму {calcTotalPrice(items)}$</span>
                </div>
            </div>
        </div>)
}