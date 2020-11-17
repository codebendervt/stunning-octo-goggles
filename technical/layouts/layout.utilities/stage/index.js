import React, {useState, useEffect, useReducer,useDebugValue} from 'react';
import {$f} from '../../../core/utility';
import './index.css'
import config from './config.json'
//import navCore from '../nav/navCore';


/**
 * Core nav for project china, a whole app is managed by this function.
 * @module Stage
 * @param {object} props.type - This sets the type of stage.
 */
function element(props) {
  //const [state, dispatch] = useReducer(navCore, initialState);
  const [type, setType] = useState("center");
  const [flow, setFlow] = useState("col")

  

  useEffect(() => {

    setType($f(!props.type ? type : props.type)); 
    setFlow($f(!props.flow ? flow : props.flow)); 
 

  },[type,flow]);

 
  return (
    <div className={config[type] +" flex-"+flow}>
       {props.children}
    </div>
  );
}




export default element;
