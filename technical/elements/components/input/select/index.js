import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
import { $f,$dd,states } from '../../../../core/utility';
import {Button} from '../../../components';

//import config from './config.json'
import navCore from '../../../nav/navCore';

const initialState = {active:""}

const updateActive = (action, state) => ({active:action})
/**
 * Core nav for project china, a whole app is managed by this function.
 * @module Select
 * @param {object} props.justify - This is to set the justify of the space.
 */
function element(props) {
    const [state, dispatch] = useReducer(navCore, initialState);
    const [data, setData] = useState([]);

    useEffect(() => {

      setData($f(props.data ? props.data : data)); 

    },[data]);

    const renderSelect = () =>{
      return data.map((i,k) => {
       return(<Button isColor={true}  active={state.active == i ? true: false} click={() => renderClick(i)} key={i + "-" +state.active} name={i}>{i}</Button>)
      })
    }

    const renderClick = (i) =>{
      $dd(dispatch,states.ssChange,updateActive,i)
      props.dispatch(i)
    }

    return (
       <div className="max-w-sm text-left">
       {renderSelect()}
       </div>
    );
}




export default element;
