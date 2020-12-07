import React, {useState, useEffect, useReducer,useDebugValue} from 'react';
import config from './config.json';
import "./index.module.css";

//import navCore from '../nav/navCore';

/**
 * Control Center, where an app has all its functions happens.
 * @module ControlCenter
 * @param {string} props.position - This is the positiont that you would like the control center to be at (bottom default).
 */

function layout(props) {
  //const [state, dispatch] = useReducer(navCore, initialState);
  const [defaultPosition] = useState("bottom");
  

  useEffect(() => {

  });

 let pos = $f(!props.position ? defaultPosition : props.position); 


  return (
    <div className="flex h-32 w-full">
    

   
    <div className={config.layout.controlCenter[pos]}>
      {props.children}
    </div>
    </div>
  );
}



const $f = (func) => func;

export default layout;
