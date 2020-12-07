import React, { useState, useEffect } from 'react';
//import image from 'url:sauveur_style/images/icon_alt.png'
import image from 'sauveur_images/icon_alt.png'
// import {$f} from '../../../core/utility';
// import './index.css'
// import config from './config.json'
//import navCore from '../nav/navCore';


/**
 * Core nav for project china, a whole app is managed by this function.
 * @module Splash
 * @param {object} props.children- This is to set the justify of the space.
 */
function element(props) {
  //const [state, dispatch] = useReducer(navCore, initialState);
  const [animateState, setAnimateState] = useState('animated fadeIn');



  useEffect(() => {


    return () => {

      setAnimateState('animated fadeOut')
    }


  }, []);


  return (
    <div className={"flex w-screen h-screen justify-center items-center relative " + animateState}>
      <img className="w-24 h-24 animate-pulse" src={"images/icon_alt.png"}></img>
    </div>
  );
}




export default element;
