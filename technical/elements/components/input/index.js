import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
import { $f } from '../../../core/utility';
import './index.css'
import { Space, Label } from '../../../'
//import config from './config.json'
//import navCore from '../nav/navCore';


/**
 * Core nav for project china, a whole app is managed by this function.
 * @module Input
 * @param {object} props.justify - This is to set the justify of the space.
 */
function element(props) {
    //const [state, dispatch] = useReducer(navCore, initialState);
    const [justify, setJustify] = useState("start")
    const [type, setType] = useState("text")
    const [pattern, setPattern] = useState("[A-Za-z0-9]+")
    const [placeholder, setPlaceholder] = useState("Mimi")
    const [label, setLabel] = useState("What")
    const [labelTwo, setLabelTwo] = useState("Should I Call")



    useEffect(() => {

        setJustify($f(!props.justify ? justify : props.justify));
        setType($f(!props.type ? type : props.type));
        setPlaceholder($f(!props.placeholder ? placeholder : props.placeholder));
        setPattern($f(!props.pattern ? pattern : props.pattern));
        setLabel($f(!props.label ? label : props.label));
        setLabelTwo($f(!props.labelTwo ? labelTwo : props.labelTwo));


    }, [justify, type,placeholder,pattern,label,labelTwo]);

    useEffect(() => {

        
    })


    return (
        <div className="flex-wrap">
            {!props.useLabel ? <></> : (<><Label type="label">{label}</Label>
 <Label type="label">{labelTwo}</Label></>)}
          
            <Space m1="x-0">
            <input type={type} pattern={pattern} className="w-64 bg-transparent w-auto text-3xl lg:text-5xl placeholder-grey font-default-black appearance-none animated fadeIn" placeholder={placeholder} autoFocus onChange={(e) => props.dispatch(e.target.value)}></input>
           
            </Space>
        </div>
    );
}




export default element;
