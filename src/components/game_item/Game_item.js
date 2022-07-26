import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentGame} from "../../redux/games/reducer";
import {GameCover} from "../game_cover";
import {GameBuy} from "../game_buy_btn";
import {GameGenre} from "../game_genre";
import "./game_item.css";


export const GameItem = ({game}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setCurrentGame(game));
        navigate(`/app/${game.title}`)
    }
    return (
        <div className="game_item" onClick={handleClick}>
            <GameCover image={game.image}/>
            <div className="game_item_details">
                <span className="game_item_title">{game.title}</span>
                <div className="game_item_genre">
                    {
                        game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)
                    }
                </div>
                <div className="game_item_buy"><GameBuy game={game}/></div>
            </div>
        </div>
    )
}