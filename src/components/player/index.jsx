import React from "react";
import Actor from "../actor";

export default function Player({skin}) {
    const data = {
        w: 32,
        h: 32
    };

    return (
        <Actor sprite={`/sprites/skins/${skin}.png`} data={data}/>
    )
}