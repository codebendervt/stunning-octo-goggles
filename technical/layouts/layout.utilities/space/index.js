import React, {useState, useEffect, useReducer,useDebugValue} from 'react';
import {$f} from '../../../core/utility';
import './index.module.css'
///import config from './config.json'
//import navCore from '../nav/navCore';


/**
 * Core nav for project china, a whole app is managed by this function.
 * @module Space
 * @param {object} props.justify - This is to set the justify of the space.
 * @param {object} props.h - Utilities for setting the height of an element.
 * @param {object} props.w - Utilities for setting the width of an element.
 * @param {object} props.items - Utilities for controlling how flex and grid items are positioned along a container's cross axis..
 * @param {object} props.m1 - Utilities for controlling an element's margin.
 * @param {object} props.m2 - Utilities for controlling an element's margin.
 */
function element(props) {
  //const [state, dispatch] = useReducer(navCore, initialState);
  const [justify, setJustify] = useState("start")
  const [height, setHeight] = useState("auto")
  const [width, setWidth] = useState("auto")
  const [items, setItems] = useState("start")
  const [m1, setM1] = useState("x-0")
  const [m2, setM2] = useState("y-0")
  const [p1, setP1] = useState("2")
  const [p2, setP2] = useState("2")
  const [sPx, setSpx] = useState("0")
  const [sPy, setSpy] = useState("0")
  const [flex, setFlex] = useState("none")
  const [flexLG, setFlexLG] = useState("none")
  const [isflex] = useState(props.customFlex)

  

  useEffect(() => {

    setJustify($f(!props.justify ? justify : props.justify)); 
    setHeight($f(!props.h ? height : props.h)); 
    setWidth($f(!props.w ? width : props.w)); 
    setItems($f(!props.items ? items : props.items)); 

    setM1($f(!props.m1 ? m1 : props.m1)); 
    setM2($f(!props.m2 ? m2 : props.m2)); 

    setP1($f(!props.px ? p1 : props.px)); 
    setP2($f(!props.py ? p2 : props.py)); 

    setSpx($f(!props.spx ? sPx : props.spx)); 
    setSpy($f(!props.spy ? sPy : props.spy)); 

    

    setFlex($f(!props.flex ? flex : props.flex)); 
    setFlexLG($f(!props.flexLg ? flexLG : props.flexLg)); 

  },[justify,height, items,m1,m2,flex,width,flexLG]);

 
  return (
    <div className={(!(isflex) ? "flex":"") + " space justify-"+justify +" h-"+height +" w-"+width + " items-"+items +" m"+m1 +" m"+m2 + " flex-"+flex+" lg:flex-"+flexLG+ " px-"+sPx+" py-"+sPy+" lg:px-"+p1+" lg:py-"+p2 + " " + props.customCss}>
       {props.children}
    </div>
  );
}




export default element;
