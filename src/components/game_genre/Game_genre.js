import React from "react";
import "./game_genre.css";

export const GameGenre = ({genre}) => {
    return (
        <div className="game_genre">
            {genre}
        </div>
    )
}