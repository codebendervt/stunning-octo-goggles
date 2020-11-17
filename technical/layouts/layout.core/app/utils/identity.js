import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
import { Canvas, Plane, Stage, Space, ControlCenter, Label, LgCard, Button,Form } from '../../../../../alice';
import {$f} from '../../../../core/utility';
//import config from './config.json';
//import './index.css';
//import { $f } from '../../../core/utility';
import image from 'url:../../../../../../coreletts/style/images/deafult.jpg'
//import navCore from '../nav/navCore';


/**
 * Core nav for project china, a whole app is managed by this function.
 * @module Identity
 * @param {object} props.home - this is to dispatch back home.
 * @param {object} props.userModel - This is identity model.
 */

function content(props) {
    //const [state, dispatch] = useReducer(navCore, initialState);
    const [data, setData] = useState([])
    const [list, setList] = useState([])
    const [animate, setAnimate] = useState('')
    const [timer, setTimer] = useState()
    // useEffect(() => {
    //     setData($f(!props.data ? data : props.data)); 
    //     setAnimate("animated fadeIn")
    //     return () => {
    //         clearTimeout(timer);
    //       }
       
    // },[props]);


    // const plane = () => (menu ? <Plane/> : <></>)


    //  let control = (menu ? <></>: <ControlCenter/>)

    // const renderContent = (i) => {
    //     let timer = setTimeout(() => {
    //         // setAniamtion("fadeOut")
    //         if(i.product){
    //             props.dispatch(i.product)
    //         }else{
    //             props.dispatch(i.option)
    //             props.dispatchProduct(i)
    //             props.dispatchCart({cart:true})
    //         }
    //         console.log("we are processing")
    //     },350)
    //     setTimer(timer);
    //     setAnimate('animated fast fadeOut')
       
       
    // }
    return (
        <Form key="identity" type="identity" view={props.changeSection} dispatchHome={props.home} full={props.full}  data={props.userModel} ></Form>

    );
}




export default content;
