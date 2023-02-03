import React,{useRef} from 'react';

import './App.css';
import {Controller,Scene} from "react-scrollmagic";
import Sequence from "./Sequence";

function App() {
  const ref = useRef();
  return (
    <div className="App">
      <Controller>
        <Scene duration="200%" triggerHook="onLeave" pin>
          {progress => (
            <div style={{ paddingTop:"50px", position: "relative" }}>
              <Sequence ref={ref} progress={progress} />
              
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
}

export default App;
