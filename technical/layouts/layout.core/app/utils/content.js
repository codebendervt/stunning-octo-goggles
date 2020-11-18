import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
import { Canvas, Plane, Stage, Space, ControlCenter, Label, LgCard, Button } from '../../../../';
import {$f} from '../../../../core/utility';
//import config from './config.json';
//import './index.css';
//import { $f } from '../../../core/utility';
import image from 'url:../../../../../../coreletts/style/images/deafult.jpg'
//import navCore from '../nav/navCore';


/**
 * Core nav for project china, a whole app is managed by this function.
 * @module content
 * @param {object} props.plane - This is to set the applet that will leave within this plane.
 * @param {object} props.control - This is where the control can be set.
 */

function content(props) {
    //const [state, dispatch] = useReducer(navCore, initialState);
    const [data, setData] = useState([])
    const [list, setList] = useState([])
    const [animate, setAnimate] = useState('')
    const [timer, setTimer] = useState()
    useEffect(() => {
        setData($f(!props.data ? data : props.data)); 
        setAnimate("animated fadeIn")
        return () => {
            clearTimeout(timer);
          }
       
    },[props]);


    // const plane = () => (menu ? <Plane/> : <></>)


    //  let control = (menu ? <></>: <ControlCenter/>)

    const renderContent = (i) => {
        let timer = setTimeout(() => {
            // setAniamtion("fadeOut")
            if(i.product){
                props.dispatch(i.product)
            }else{
                props.dispatch(i.option)
                props.dispatchProduct(i)
                props.dispatchCart({cart:true})
            }
            console.log("we are processing")
        },350)
        setTimer(timer);
        setAnimate('animated fast fadeOut')
       
       
    }
    return (
        <div className={animate}>

            {
                data.map((i, k) => {
                   
                    if (k % 2){
                        return (
                            <Space key={k} px="0" py="4" >
                                <Space justify="center" w="full" flex="wrap" px="0" py="0">
                                    <LgCard delay={0} key={data[k-1].name} image={image}
                                        title={data[k-1].name}
                                        preface={data[k-1].description}
                                        onClick={() => renderContent(data[k-1])}
                                    />
                                    <LgCard delay={1}
                                    key={i.name}
                                        title={i.name}
                                        preface={i.description}
                                        onClick={() => renderContent(i)}
                                    />
                                </Space>
                            </Space>

                        )
                    }
                     
                })
            }

            {/* 

 <Space px="0" py="0" >


                    <Space justify="center" w="full" flex="wrap" px="0" py="0">
                        <LgCard image={image}
                            title="Mimi"
                            preface="In loving Memory"
                        />
                        <LgCard
                            title="Mimi"
                            preface="In loving Memory"
                        />
    
    
                    </Space>
    
    
                </Space>

            <Space px="0" py="0" >


                <Space justify="center" w="full" flex="wrap" px="0" py="0">
                    <LgCard
                        title="Mimi"
                        preface="In loving Memory"
                    />
                    <LgCard
                        title="Mimi"
                        preface="In loving Memory"
                    />


                </Space>

            </Space> */}

        </div>

    );
}




export default content;
