import { useState, useRef, useEffect, MutableRefObject } from "react";
import p5 from "p5";

export interface P5Sketch {
    p5_instance: p5,
    p5_node_ref: MutableRefObject<undefined> | any
}


export const useP5 = (sketch: (...args: any[]) => void) => {
    const [p5_instance, setP5]: [any, any] = useState(null);
    const node_ref = useRef(undefined);

    useEffect(() => {
        setP5(new p5(sketch, node_ref.current));

    }, [sketch]);

    const output: P5Sketch = { p5_instance: p5_instance, p5_node_ref: node_ref }

    return output
}