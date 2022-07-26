import React from "react";
import "./game_cover.css";

export const GameCover = ({image = ""}) => {
    return (
        <div className="game_cover" style={{backgroundImage: `url(${image})`}}/>
    )
}