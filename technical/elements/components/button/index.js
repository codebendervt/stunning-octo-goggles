import React, {useState, useEffect, useReducer,useDebugValue} from 'react';
import navCore from '../../nav/navCore';
import {$f,states} from '../../../core/utility';
import './index.module.css'
import config from './config.json'

const initialState = { active: false};
/**
 * Core nav for project china, a whole app is managed by this function.
 * @module Button
 * @param {boolean} props.active - this is to set the button as active or not.
 * @param {object} props.control - This is where the control can be set.
 */

 const checkActive = (state) => ({active: !(state.active)})
 const clearActive = (state) => ({active: false})
function element(props) {
  const [state, dispatch] = useReducer(navCore, initialState);
  const $d = (type, object) => dispatch({ type: type, object: object });

  const [active, setActive] = useState("inactive")
  const [type, setType] = useState("btn")
  const [color, setColor] = useState(props.color)

//  "text-grey hover:text-black"

  useEffect(() => {
    //
   
    document.addEventListener("touchstart", function(){}, true);
    //this is to allow a person to start a button as active.
    if(props.active){
      setActive($f(props.active ? "active" : "inactive")); 
    }else{
      setActive($f(state.active ? "active" : "inactive")); 
    }

    setType($f(props.type ? "btn-"+props.type : type)); 
    setColor($f(!props.isColor ? "default" : "custom")); 
    //setClear($f(props.clear ? $d(states.sChange,clearActive) : console.log("do not clear state")); 
    
  },[type,state,color,active,props]);

  
 
  return (
    <>
        <div onClick={(e) =>{ 
          try{
            e.preventDefault();
            //console.info("button clicked")
            props.click();
            $d(states.sChange,checkActive)
            
           
           
          }catch{
            console.log("button not set")
          }
          }} className={config[type][active] +" " + color}>{props.children}</div>

    </>
  );
}

// (props.active ? "active" : "inactive")




export default element;
