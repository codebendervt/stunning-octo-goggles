import React, {useState, useEffect, useReducer,useDebugValue} from 'react';
import {$f} from '../../../core/utility';
import {Plane,Space,Button} from '../../../'
import './index.css'
///import config from './config.json'
//import navCore from '../nav/navCore';


/**
 * Core nav for project china, a whole app is managed by this function.
 * @module Alerts
 */
function element(props) {
  //const [state, dispatch] = useReducer(navCore, initialState);


  

  useEffect(() => {


  
  },[]);

 
  return (
    <Plane type="alert" open={props.open}>
        <Space justify="center" customCss=" bg-transparent -my-6  lg:-my-8 z-40">
        <svg className="w-12 lg:w-16  " width="100%" height="100%" viewBox="0 0 267 267"><path d="M230.245,58.267l-101.792,120.112l-51.557,-48.08l7.269,-7.803l43.382,40.453l95.712,-112.933c-22.422,-24.181 -54.427,-39.349 -89.926,-39.349c-67.642,-0 -122.666,55.024 -122.666,122.666c-0,67.643 55.024,122.667 122.666,122.667c67.643,0 122.667,-55.024 122.667,-122.667c0,-28.261 -9.632,-54.304 -25.755,-75.066Z"/></svg>
        </Space>

        <Space flex="grow" items="center" justify="center" h="full" customCss="bg-white shadow text-black flex-wrap">
            <div className="flex-wrap m-auto">
            <Space justify="center">
                <p className="lg:text-xl ">{props.status}</p>
            </Space>
                
           <Space justify="center">
               {
                   props.action.map((i) => {

                    return (
                        <Button click={() => i.dispatch()}>{i.name}</Button>
                    )
                   })
               }
            
           </Space>
            </div>
           
        </Space>
    </Plane>
  );
}




export default element;
