import { React, useState, useRef, useEffect } from "react";
import p5 from "p5";


const s = (sketch) => {

    let x = 100;
    let y = 100;

    sketch.setup = () => {
        sketch.createCanvas(200, 200);
    };

    sketch.draw = () => {
        sketch.background(0);
        sketch.fill(255);
        sketch.rect(x, y, 50, 50);
    };
};

export const P5Canvas = () => {

    const [p5_instance, setP5] = useState(null);
    const node_ref = useRef(undefined);

    useEffect(() => {
        setP5(new p5(s, node_ref.current));

    }, []);



    return (
        <div ref={node_ref.current} ></div>
    )
}