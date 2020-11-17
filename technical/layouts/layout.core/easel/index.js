import React, {useState, useEffect, useReducer,useDebugValue} from 'react';
import config from './config.json';
import './index.css';
//import navCore from '../nav/navCore';


function layout(props) {
  //const [state, dispatch] = useReducer(navCore, initialState);

  

  useEffect(() => {

  });


 
  return (
    <div id="screen" className={config.easel}>
        {props.children}
    </div>
  );
}





export default layout;
