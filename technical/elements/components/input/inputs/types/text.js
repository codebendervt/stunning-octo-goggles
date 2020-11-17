import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
import { $f } from '../../../../../core/utility';
import Input from '../../';

//import config from './config.json'
//import navCore from '../nav/navCore';


/**
 * Core nav for project china, a whole app is managed by this function.
 * @module InputText
 * @param {object} props.justify - This is to set the justify of the space.
 */
function element(props) {
    //const [state, dispatch] = useReducer(navCore, initialState);

    useEffect(() => {



    });


    return (
        <Input useLabel={props.useLabel} type="text" placeholder={props.placeholder}  label={props.label} labelTwo={props.labelTwo} dispatch={props.dispatch}/>
    );
}




export default element;
