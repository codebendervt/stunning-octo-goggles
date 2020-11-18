import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
import navCore from '../elements/nav/navCore'
//import './index.css'
import {$f,$d,$dd,$try,$ls, states} from '../core/utility';
// import Card from '../'
// import {Space,Label} from '../../../../'

const initialState = {bucket:[], name:""}
//const updateBucket = (action,state) => (Object.assign(state,{story:action}));
const updateBucket = (action,state) => ({bucket:[...state.bucket,...action.bucket],name:action.name});

const bucket = (bucketName,bucket) => ({name:bucketName,bucket:[bucket]})

// { page: state.page + 1 }
/**
 * Core nav for project china, a whole app is managed by this function.
 * @module Bucket
 * @param {object} props.name - This is the name of the bucket.
 * @param {object} props.bucket - This is where the data will be stored.
 */
function core(props) {
    const [state, dispatch] = useReducer(navCore, initialState);
    // const $dd = (type, object, action) => dispatch({type: type, object:object, data:action});
    // const [hello, setHello] = useState(props.hello)


    useEffect(() => {

        // setSize($f(props.size ? props.size : size));
        console.info("Bucket initialized");
        //console.info(state)
        if(props.bucket){
            $dd(dispatch,states.ssChange,updateBucket,bucket(props.name,props.bucket))
        }
       
      

        return () => {

            let data =  {name:props.name,bucket:props.bucket}
            if(props.bucket){
                $try(() => $ls(data),"unable to save bucket")
                console.info("bucket saved",props.bucket);
            }
       
        }

   

    },[props.name,props.bucket]);



    return (
        <>
       {
        //    props.name ?  $try($ls(state),"unable to save bucket") : ""

       }
        </>
    );
}




export default core;
