import React from "react";

export default function Sprite({image, data, pos}) {
    const {x, y, w, h} = data;

    return <div
        style={{
            position: "absolute",
            top: pos.y,
            left: pos.x,
            height: `${h}px`,
            width: `${w}px`,
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `-${x}px -${y}px`
        }}
    />
}