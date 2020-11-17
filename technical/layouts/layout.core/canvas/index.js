import React, {useState, useEffect, useReducer,useDebugValue} from 'react';
import config from './config.json';
import './index.css';
//import navCore from '../nav/navCore';


function layout(props) {
  //const [state, dispatch] = useReducer(navCore, initialState);
  const [menu, setMenu] = useState(false)
  

  useEffect(() => {

  });

 
  return (
 
        <div className={config.canvas}>
            {props.children}
        </div>

  );
}




export default layout;
