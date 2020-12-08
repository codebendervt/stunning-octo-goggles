import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
import './facebook.module.css';
// import { Splash } from '../../..';
// import getData from '../fetch';
// import navCore from 'sauveur_elements/nav/navCore'


const initialState = {status:404};
/**
 * Core nav for project china, a whole app is managed by this function.
 * @module WhatsappLink
 * @param {object} props.name - This is the name of the bucket.
 * @param {object} props.bucket - This is where the data will be stored.
 */
function core(props) {
     //const [state, dispatch] = useReducer(navCore, initialState);
    // const $dd = (type, object, action) => dispatch({type: type, object:object, data:action});
    // const [load, setLoad] = useState(false)
     const [animateState, setAnimate] = useState('animated fadeIn');

    useEffect(() => {


        // if (!load) {
        //     // getData(props.url).then(data => initData(data)).catch(err => console.error('can not get data: ', err))
        //     // console.log('getting your data',);
        // }

        return () => {
            setAnimate('animated fadeOut')
        }



    }, []);

    const openLink = () => {

        setTimeout( () => {
            // window.open("https://wa.me/27815206804?text=I'm%20interested%20in%20your",'_system')

            window.location = "https://wa.me/27815206804?text=I'm%20interested%20in%20your";
        }, 2000)

    }



    return (

      <a href="#find" className="appearance-none cursor-emoji text-xl lg:text-2xl" onClick={ () => openLink()}>Learn More</a>


    );
}




export default core;
