import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
import setup from './core/setup';

import navCore from '../../../elements/nav/navCore'
//import './index.css'
import { $f, $d, $dd, $try, $ls, states } from '../../../core/utility';
// import Card from '../'
import { Space, Label,Button,Bucket } from '../../../'

const initialState = { value: "", name: "" }
//const updateBucket = (action,state) => (Object.assign(state,{story:action}));
const updateForm = (action, state) => ({ name: action.name, value: action.data });

const formData = (formName, data) => ({ name: formName, data: data })

const updatedQuantity = (action, state) => (action)

// this needs to be made more modular
// { page: state.page + 1 }
/**
 * Core nav for project china, a whole app is managed by this function.
 * @module Form
 * @param {object} props.size - This is to set the size of the card.
 * @param {object} props.control - This is where the control can be set.
 */
function element(props) {
    const [state, dispatch] = useReducer(navCore, initialState);
    const [quantity, dispatchQuantity] = useReducer(navCore, initialState);
    // const $dd = (type, object, action) => dispatch({type: type, object:object, data:action});
    // const [hello, setHello] = useState(props.hello)
    const [length] = useState(props.data.length)
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])
    const [formState, setFormState] = useState("Welcome")
    const [results, setResults] = useState()
    const [animate, setAnimate] = useState('')
    const [timer, setTimer] = useState()
    let setQuantity = (value) => $dd(dispatchQuantity, states.ssChange, updatedQuantity,value)


    useEffect(() => {

        // setSize($f(props.size ? props.size : size));
        //console.info("Form initialized");
        // console.info(state)
        // if(props.bucket){
        //     $dd(dispatch,states.ssChange,updateBucket,bucket(props.name,props.bucket))
        // }
        // setData([...data,state])


        return () => {
    
            //console.info("Form Saved");
        }



    }, [props.name, props.data, state]);

    useEffect(() => {

        // setSize($f(props.size ? props.size : size));
        console.info("Form initialized");
        // console.info(state)
        // if(props.bucket){
        //     $dd(dispatch,states.ssChange,updateBucket,bucket(props.name,props.bucket))
        // }
        // setData([...data,state])


        return () => {
            clearTimeout(timer)
            setData([]);
            //console.info("Form Saved");
        }



    }, []);

    const renderForm = () => {

        let currentItem = (page - 1)




        if (currentItem >= 0 && currentItem < length) {
            let initData = props.data[currentItem]
            console.log(initData)
            let d = (value) => $dd(dispatch, states.ssChange, updateForm, formData(initData.name, value))
            let data = initData;
            return setup(data, d);
        }



    }

    const update = () => {
        console.log("going to next question");
        setFormState("Page-"+page)
        setPage(page + 1)
        if (page > 0) {
            setData([...data, state])
        }

        if(props.type == "cart"){
            let q;
            q = data.map((i) => (i.name == "quantity" ? parseInt(i.value) : 0)
           ).reduce((x,y) => x+y,0)
    
           console.log(q)
           setQuantity(q);
        }
    

    }

    const renderCheck = () => {

        return data.map((i) => {
            return (<Space key={i.name} flex="col">
<Space>{i.label}</Space> 
<Space>{i.value}</Space>
                </Space>)
        })

       
    }

    const submitForm = () => {
        let result = {}
        let timer;
        if(props.type == "cart"){
            let product = props.info.name;
       
             result = {name:product,options:data,price:props.info.price,quantity:quantity}
    
             timer = setTimeout(() => {
                props.dispatchCart({cart:false, newItem:true})
                props.dispatchHome();
                props.dispatchAlert({status:true})
                console.log("we are processing the form")
            },350)
        }

            if(props.type == "identity"){
                result = {identity:data}
                 timer = setTimeout(() => {
                    props.full({cart:false})
                    props.dispatchHome()
                    props.view({name:"home"})
                    console.log("we are processing the form")
                },350)
                
            }
       
            setTimer(timer)
            setResults(result)
            setAnimate("animated fast fadeOut")
        }
     
     
       



    return (
        <Space w="full" flex="grow" flexLg="grow" px="0" py="0" customCss={animate}>
            {/* turn this into allowing you to track which page your on */}
            {/* <div>{page}:{length}</div> */}

            <Space  flex="col" flexLg="col" h="full" w="full">
                <Space>
                    {renderForm(page)}
                </Space>


                {page > length ? <div key="check">{renderCheck()}</div> : <></>}

                <Space flex="grow" flexLg="grow"  w="full" justify="end" items="end">
                    {/* this will be where there data you have inputed lives */}
                    <div>{props.type == "cart" ? props.info.price : " "}</div>
                    {page < (length + 1) ? <Button key={formState}  click={() => update()}>next</Button> : <Button click={() => submitForm()}>done</Button>}
                </Space>

            </Space>



            {/* {$ls(state)} */}
            {<Bucket name={props.type} bucket={results}></Bucket>}
        </Space>
    );
}




export default element;
