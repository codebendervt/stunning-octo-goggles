import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
//import './index.css'
import {$f,$try, states} from '../../../../core/utility';
import Card from '../'
import {Space,Label} from '../../../../'


/**
 * Core nav for project china, a whole app is managed by this function.
 * @module SmCard
 * @param {object} props.size - This is to set the size of the card.
 * @param {object} props.control - This is where the control can be set.
 */
function element(props) {
    // const [state, dispatch] = useReducer(navCore, initialState);
    // const $dd = (type, object, action) => dispatch({type: type, object:object, data:action});
    const [size, setSize] = useState("lg")
    const [title] = useState(props.title || "In Loving")
    const [preface] = useState(props.preface || "Memory of Mimi")


    useEffect(() => {
        setSize($f(props.size ? props.size : size));
    }, [size]);



    return (
        <>
           <Card size="sm">
             <div className="flex h-full items-end ">
               <Space customFlex={true} flex="wrap">
                 <Label type="card">{title}</Label>
                 <Label type="preface">{preface}</Label>
               </Space>
               </div>
             </Card>

        </>
    );
}




export default element;
