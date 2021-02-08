import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
import { Canvas, Plane, Stage, Space, ControlCenter, Label, LgCard, Button,Bucket } from '../../../../';
import { $f, $gbd,$deleteStorage,$try,$setLocalStorage } from '../../../../core/utility';
//import config from './config.json';
//import './index.css';
//import { $f } from '../../../core/utility';
//import image from 'url:sauveur_style/images/deafult.jpg'
//import navCore from '../nav/navCore';


/**
 * Core nav for project china, a whole app is managed by this function.
 * @module content
 * @param {object} props.plane - This is to set the applet that will leave within this plane.
 * @param {object} props.control - This is where the control can be set.
 */

function content(props) {
    //const [state, dispatch] = useReducer(navCore, initialState);
    const [data, setData] = useState($gbd('cart') )
    const [user, setUser] = useState($gbd('identity'))
    const [length, setLength] = useState()
    const [orderTotal, setOrderTotal] = useState(parseFloat(0.00))
    const [animate, setAnimate] = useState('')
    const [viewOrder, setViewOrder] = useState(false)
    const [viewUser, setViewUser] = useState(false)
    // const [timer, setTimer] = useState()

    useEffect(() => {
        // setData($f(!props.data ? data : props.data)); 
        // setAnimate("animated fadeIn")
        // return () => {
        //     clearTimeout(timer);
        //   }

        if(data){
            setLength(data.length)
            let total = data.map((i) => i.price * i.quantity ).reduce((a,c) => a+c,0);
            setOrderTotal(total);
        }

         return () => {
            view(false,false);
        }

    }, []);

    useEffect(() => {
        // setData($f(!props.data ? data : props.data)); 
        // setAnimate("animated fadeIn")
        // return () => {
        //     clearTimeout(timer);
        //   }

        setData($gbd('cart'))
        setUser($gbd('identity'))
        if(data){
            setLength(data.length)
            let total = data.map((i) => i.price * i.quantity ).reduce((a,c) => a+c,0);
            setOrderTotal(total);
        }

    }, [props]);




    // const plane = () => (menu ? <Plane/> : <></>)


    //  let control = (menu ? <></>: <ControlCenter/>)

    const toggle = () => {
        props.toggle();
        props.full({cart:true})
        props.dispatchSection({name:'identity'})
    }
    const renderContent = () => {

        if(viewOrder){
            return(
                data ? data.map((i, k) => {
                    return (
                        <div key={k}>
                            <p className="text-sm font-default" key={i.name}>{i.name}{i.price}</p>
                            <div className="cursor-emoji" onClick={() => deleteOrder(k)}>delete</div>
                        </div>
        
                    )
                }) : <>You have no orders</>
            )
       
        }else if(viewUser){
            return(
                user ? user[0].identity.map((i, k) => {
                    return (
                        <div key={k}>
                            {i.name == "name" ?  i.value : ""}
                        </div>
        
                    )
                }) : <Button click={() => toggle()}>Sign In</Button>
            )
        }
      

        // let timer = setTimeout(() => {
        //     // setAniamtion("fadeOut")
        //     if(i.product){
        //         props.dispatch(i.product)
        //     }else{
        //         props.dispatch(i.option)
        //         props.dispatchProduct(i)
        //         props.dispatchCart({cart:true})
        //     }
        //     console.log("we are processing")
        // },350)
        // setTimer(timer);
        //setAnimate('animated fast fadeOut')


    }

    const view = (order,user) => {
        setViewOrder(order);
        setViewUser(user);
    }

    const deleteOrder = (index) => {
        data.splice(index, 1);
        setData(data);
        setLength(data.length);
        $try( () => $deleteStorage('cart'),"unable to update cart");
        $setLocalStorage('cart',data);
    }


    return (
        <div className={animate + "mx-auto lg:w-full"}>
            <Space flexLg="row" flex="col" customCss="lg:w-full lg:h-full">
                <Space w="full" spy="4" flex="wrap" customCss="lg:w-64 lg:h-64">

                    <div onClick={() => view(!viewOrder, false)} className="w-48 m-1 h-24 rounded bg-black">
                        {length > 0 ? (<div className="w-full h-4 flex justify-end ">
                            <span className="relative flex h-4 w-4 -m-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-grey opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-grey text-xs justify-center text-white">{length}</span>
                            </span>
                        </div>) : <></>}

                        <div className="w-full px-2">
                            <p className="text-xl text-white">Orders</p>
                        </div>
                        <div className="w-full -my-2 px-2 text-right">
                            <p className="text-lg text-white">Total</p>
                        </div>
                        <div className="w-full -my-2 px-2 text-right">
                            <p className="text-lg text-white">{orderTotal ? orderTotal.toString() : 0.00.toString() }</p>
                        </div>

                    </div>

                    <div onClick={() => view(false,!viewUser)} className="w-48 m-1 h-24 rounded bg-black">
                        <div className="w-full px-2">
                            <p className="text-xl text-white">Identity</p>
                        </div>
                        <div className="w-full -my-2 px-2 text-right">
                            <p className="text-lg text-white">{
                                user ? user[0].identity[0].value : "Sign In Required"
                            
                            }</p>
                        </div>


                    </div>
                </Space>

                <Space w="full" h="full" flex="wrap" customCss="lg:h-64 lg:max-w-4xl lg:flex-grow">
                    <div className="flex-wrap lg:flex">
                        {renderContent()}
                    </div>
                </Space>

                <Space w="full"  flex="wrap" customCss="lg:h-64 lg:w-64 lg:items-end">
                    <Button>Pay Now</Button>
                </Space>
                
            </Space>


        </div>

    );
}




export default content;

// why
