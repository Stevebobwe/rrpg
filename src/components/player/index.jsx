import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/useKeyPress";
import useWalk from "../../hooks/useWalk";

export default function Player({skin}) {
    const {dir, step, walk, pos} = useWalk(3);
    const data = {
        w: 32,
        h: 32
    };

    useKeyPress((e) => {
        walk(e.key.replace("Arrow", "").toLowerCase());

        // Prevents default while allowing F12
        if (e.keyCode !== 123) {
            e.preventDefault();
        }
    });

    return (
        <Actor sprite={`/sprites/skins/${skin}.png`} data={data} step={step} dir={dir} pos={pos}/>
    )
}