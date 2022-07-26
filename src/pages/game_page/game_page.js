import React from "react";
import {useSelector} from "react-redux";
import {GameCover} from "../../components/game_cover";
import "./game_page.css";
import {GameGenre} from "../../components/game_genre";
import {GameBuy} from "../../components/game_buy_btn";


export const GamePage = () => {
    const game = useSelector(state => state.game.currentGame);
    if (!game) return null;
    return (
        <div className="game_page">
            <h1 className="game_page_title">{game.title}</h1>
            <div className="game_page_content">
                <div className="game_page_left">
                    <iframe className="game_buy_frame" width="90%" height="400px" src={game.video}
                            title="YouTube Video Player"/>
                </div>
                <div className="game_page_right">
                    <GameCover image={game.image}/>
                    <p>{game.description}</p>
                    <p className="secondary_text">Популярные метки данного продукта:</p>
                    {game.genres.map((genre) => (
                        <GameGenre genre={genre} key={genre}/>
                    ))}
                    <div className="game_page_buy_game">
                        <GameBuy game={game}/>
                    </div>
                </div>
            </div>
        </div>
    )
}