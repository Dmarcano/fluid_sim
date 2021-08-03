import { useState, useEffect } from "react";


export const useWasm = () => {
    const [wasm, setWasm]: [any, any] = useState(null);

    useEffect(() => {
        import('fluid-vis').then(module => { setWasm(module) })
    }, [])
    return wasm;
}