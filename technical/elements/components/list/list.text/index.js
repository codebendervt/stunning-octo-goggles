import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
import './index.css'
import Button from '../../button'
import {$f,$try, states} from '../../../../core/utility';
//import config from './config.json'
import navCore from '../../../nav/navCore';

const initialState = { active: "help"};
// list template data
const inititalData = [{ n: "option 1", v: "hello", t: "Option 1",a:true }, { n: "option 2", v: "hello world", t: "Option 2", c: $f(() => console.log("hellow world")) }]

const active = (data,state) => ({ active: data});

const changePage = (state) => ({page: state.page + 1})
const pageReset = (state) => ({page: 0});



/**
 * Core nav for project china, a whole app is managed by this function.
 * @module ListText
 * @param {object} props.plane - This is to set the applet that will leave within this plane.
 * @param {object} props.control - This is where the control can be set.
 */
function element(props) {
    const [state, dispatch] = useReducer(navCore, initialState);
    const $dd = (type, object, action) => dispatch({type: type, object:object, data:action});

    
    const [data, setData] = useState(inititalData)
    const [text, setText] = useState("text")


    useEffect(() => {
        setData($f(props.data ? props.data : data)); 
    }, [data, text]);


    //#region select component
const selectNavControl = () =>{

}
const ShowData = () => {
  const trend = 3;
  let maxPages = data.count.value/trend;
  console.log(maxPages);
  let pos = trend * state.page ;
   if(state.page >= maxPages){
     $d(states.sChange,pageReset);
   }
  return(
    data.value.map((data, index) => {
      if(index >= pos && index < (trend * (state.page + 1)))
      {
    //     return(
      
    //     <div key={index} id={data.id} onClick={() => dispatch({type: 'selectStateChange', object:getRG, data:data.id})} className="cursor-emoji"> {data.displayName || data.name}</div>

    // )
       }
    })
  )
}
//#endregion

    return (
        <>
            <div className="flex flex-col mx-auto my-auto content-end appearance-none">

                {data.map((i, d) =>
                    <Button key={i.n} click={() => $try(i.c,"another value not set at index " + i.n)} >{i.t}</Button>)}

            </div>

        </>
    );
}




export default element;
