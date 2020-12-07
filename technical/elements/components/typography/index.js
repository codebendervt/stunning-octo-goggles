import React, {useState, useEffect, useReducer,useDebugValue} from 'react';
import {$f} from '../../../core/utility';
import './index.module.css'
import config from './config.json'
//import navCore from '../nav/navCore';


/**
 * Core nav for project china, a whole app is managed by this function.
 * @module Label
 * @param {object} props.justify - This is to set the justify of the space.
 */
function element(props) {
  //const [state, dispatch] = useReducer(navCore, initialState);
  const [justify, setJustify] = useState("start")
  const [type, setType] = useState("title")

  

  useEffect(() => {

    setJustify($f(!props.justify ? justify : props.justify)); 
    setType($f(!props.type ? type : props.type)); 
 

  },[justify,type]);

 
  return (
    <div className={"typography-text " + config[type]}>
       {props.children}
    </div>
  );
}




export default element;
