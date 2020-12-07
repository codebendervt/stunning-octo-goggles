import React, {useState, useEffect, useReducer,useDebugValue} from 'react';
import './index.module.css';
import config from './config.json';
import animation from './animate.json';
//import navCore from '../nav/navCore';
import {$f} from '../../../core/utility';

function layout(props) {
  //const [state, dispatch] = useReducer(navCore, initialState);
  const [type, setType] = useState("plane")
  const [animate, setAnimation] = useState("plane")
  

  useEffect(() => {
    setType($f(!props.type ? type : props.type)); 

  },[type]);

 
  useEffect(() => {
   
  
    // if(props.open){

    // }
    setAnimation(animation[type][props.open ? "in" : "out"])
    console.log("hello")
    return () => {
    
      setAnimation(animation[type]["out"])
    }

  },[props]);

  // useEffect(() => {
   
  //   setActive($f(!props.open ? active : props.open)); 
  // });


 
  return (
      <div  className={config[type]  + (!(props.open) ? " " + animate + " faster ": " "+ animate)}>
        {props.children}
      </div>

  );
}




export default layout;
