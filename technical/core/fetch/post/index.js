import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
import { Splash } from '../../..';
import getData from '../fetch';

//import navCore from '../elements/nav/navCore'


// { page: state.page + 1 }
/**
 * Core nav for project china, a whole app is managed by this function.
 * @module Post
 * @param {object} props.name - This is the name of the bucket.
 * @param {object} props.bucket - This is where the data will be stored.
 */
function core(props) {
    // const [state, dispatch] = useReducer(navCore, initialState);
    // const $dd = (type, object, action) => dispatch({type: type, object:object, data:action});
    const [load, setLoad] = useState(false)
    const [animateState, setAnimate] = useState('animated fadeIn');


    useEffect(() => {


        if (!load) {
            getData(props.url).then(data => initData(data)).catch(err => console.error('can not get data: ',err))
            console.log('getting your data',);
        }

        return () => {


        }



    }, []);

    const initData = (data) => {
        console.log(data)

        setTimeout(()=> {setLoad(true)},2000)

        setAnimate('animated fadeOut')
    }



    return (

        <div className={animateState}>

            (!load ?  (<Splash></Splash>) : <></>)

        </div>



    );
}




export default core;
