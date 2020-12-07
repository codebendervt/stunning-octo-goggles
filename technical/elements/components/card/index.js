import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
import './index.module.css'
import {$f,$try, states} from '../../../core/utility';
import config from './config.json'


/**
 * Core nav for project china, a whole app is managed by this function.
 * @module Card
 * @param {object} props.size - This is to set the size of the card.
 * @param {object} props.control - This is where the control can be set.
 */
function element(props) {
    // const [state, dispatch] = useReducer(navCore, initialState);
    // const $dd = (type, object, action) => dispatch({type: type, object:object, data:action});
    const [size, setSize] = useState("lg")
    const [animation, setAniamtion] = useState('fadeIn')


    useEffect(() => {
        setSize($f(props.size ? props.size : size));
    }, [size]);

    useEffect(() => {
        setAniamtion("fadeIn")
        // setTimeout(() => {
        //     // setAniamtion("fadeOut")
        //     console.log("we are timed out")
        // },2000)
        return () => {
           
            console.log("removed")
          }
    },[]);

    //#region fadeout card
    //figure out why on click this decides to happen
    // useEffect(() => {
    //     return () => {
           
    //         setAniamtion("fadeOut")
    //       }
      
    // },[props.onClick]);
    //#endregion



    return (
        <>
            <div onClick={() => props.onClick()} className={config[size]+ " shadow-md lg:shadow-lg rounded-lg my-2 mx-1 bg-white hover:shadow-none cursor-emoji animated "+animation+" delay-"+props.delay+"s"}>
                <div className="flex relative h-full">
                <div className={"image absolute rounded bg-cover  w-full h-full animated  "+animation+" delay-"+props.delay+"s"} style={{backgroundImage: 'url('+props.image+')'}}></div>
               <div className="bg-white opacity-25 absolute rounded bg-cover  w-full h-full"></div>
                {props.children}
                </div>
        
            </div>

        </>
    );
}




export default element;
