import React from 'react';
import './App.css';
import { useWasm } from './hooks/useWasm';
import Sketch from 'react-p5'
import p5Types from 'p5'

function App() {

  let wasm = useWasm();

  return (
    <div className="App">
      <header className="App-header">


        <button onClick={() => { wasm.greet() }} >wasm?</button>


      </header>

    </div>
  );
}

export default App;
