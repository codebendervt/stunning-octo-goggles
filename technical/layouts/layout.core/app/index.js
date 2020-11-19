import React, { useState, useEffect, useReducer, useDebugValue } from 'react';
import { Canvas, Plane, Stage, Space, ControlCenter, Label, LgCard, Button, Form, Alert } from '../../../../';
import config from './config.json';
import './index.css';
import { $f, $dd, states, $d } from '../../../core/utility';
import image from 'url:sauveur_style/images/deafult.jpg'
import Content from './utils/content';
import Order from './utils/order';
import Identity from './utils/identity';


import navCore from '../../../elements/nav/navCore';

const initialState = [];
const menuState = false

const changeContent = (action, state) => (action);
const toggle = (state) =>  (!state)
/**
 * Core nav for project china, a whole app is managed by this function.
 * @module app
 * @param {object} props.plane - This is to set the applet that will leave within this plane.
 * @param {object} props.control - This is where the control can be set.
 */

function layout(props) {
  const [state, dispatch] = useReducer(navCore, initialState);
  const [section, dispatchSection] = useReducer(navCore, initialState);
  const [isCart, dispatchCart] = useReducer(navCore, initialState);
  const [currentProduct, dispatchProduct] = useReducer(navCore, initialState);
  const [alert, dispatchAlert] = useReducer(navCore, initialState);
  const [menu, udpateMenu] = useReducer(navCore, menuState);
  const [label, dispatchLabel] = useReducer(navCore, config["home"]);
  //const [menu, setMenu] = useState(false)
  const [navigator, setNavigator] = useState(false)
  const [navigation, setNaivation] = useReducer(navCore, initialState);
  const d = (value) => $dd(dispatch, states.ssChange, changeContent, value);
  const c = (value) => $dd(dispatchCart, states.ssChange, changeContent, value);
  const p = (value) => $dd(dispatchProduct, states.ssChange, changeContent, value);
  const n = (value) => $dd(setNaivation, states.ssChange, changeContent, value);
  const a = (value) => $dd(dispatchAlert, states.ssChange, changeContent, value);
  const l = (value) => $dd(dispatchLabel, states.ssChange, changeContent, value);
  const setMenu = () => $d(udpateMenu, states.sChange, toggle);
  const changeSection = (value) => $dd(dispatchSection, states.ssChange, changeContent, value);
  const home = () => $dd(dispatch, states.ssChange, changeContent, navigation[0]);
  const back = (value) => $dd(dispatch, states.sChange, changeContent, navigation[(navigation.length - value)]);

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setNavigator(true)
    }
  });

  useEffect(() => {


    d(props.data)



  }, [props]);


  useEffect(() => {


    if (state != props.data) {
      n([...navigation, state])
    } else {
      n([props.data])
    }


    if (isCart.newItem) {
      console.log("newItem")
      n([props.data])
      c({})
    }

  }, [state]);




  const homePage = () => {
    return (isCart.cart ? <Form key="form" type="cart" dispatchHome={home} dispatchCart={c} info={currentProduct} data={state} dispatchAlert={a} /> : <div key="content" className="m-auto w-full h-full ">
    <Content dispatchProduct={p} dispatch={d} dispatchCart={c} data={state}></Content>
  </div>)

  
  }

  // const plane = () => (menu ? <Plane/> : <></>)


  //  let control = (menu ? <></>: <ControlCenter/>)
  return (
    <>
      {/* {navigator ?  <></> :  <Plane open={true} type="splash">
      <Space justify="center" h="full">
        <div className="text-5xl font-default-bold m-auto">
          Hello World 
          </div>
      </Space>
    </Plane>} */}



      <Plane type="app" open={menu}>
        <div className="w-full h-full flex  font-default-bold text-4xl">
          <Order open={isCart.newItem} full={c} toggle={setMenu} dispatchSection={changeSection} key="order"></Order>

          {/* Gmabata Main */}
          {/* <div className="text-center capitalize  mx-auto my-auto">
          <svg className={"mx-2 pb-4 lg:pb-2 w-5 lg:w-6  stroke-current fill-current text-black"} viewBox="0 0 125 267"><g><path d="M62.5,0l62.5,125l-125,0l62.5,-125Z"/><path d="M62.5,141.667l62.5,125l-125,-0l62.5,-125Z"/></g></svg>
          </div> */}

        </div>
      </Plane>

      <Canvas key="app">

        <Stage type="splash" flow="row">

          <div className="flex-auto hidden lg:flex bg-black lg:w-1/3  xl:w-1/2 md:w-auto lg:h-screen">
            <Space flex="auto">

            </Space>
          </div>

          <div className="flex-auto lg:flex md:flex-auto  lg:w-2/3 xl:w-1/2 bg-transparent">

            <Space flex="col" m1="x-0" m2="y-0" w="full" h="full" px="0" py="0" items="center">

              {/* <Space flex="row" w="full" m1="x-0">
                <div className="w-3/4 mx-4">
                  <Label type="plugTitle">What would you like</Label>
                  <Label type="plugTitle">to have ?</Label>
                </div>
                <div className="w-1/4 justify-end flex">b</div>
              </Space> */}
              <ControlCenter position="top">
                <div className="w-full flex lg:flex-row-reverse">
                  <div className="w-full lg:w-2/3 xl:w-1/2  px-4 lg:text-black ">
                    <Label type="plugTitle">{label.labelOne}</Label>
                    <Label type="plugTitle">{label.labelTwo}</Label>
                  </div>
                  <div className="xl:w-1/2 justify-start flex-wrap">
                    {/* <Label type="plugTitle">What would you like</Label>
                  <Label type="plugTitle">to have ?</Label> */}
                    <Button click={() => back(1)}>Back</Button>
                  </div>
                </div>

              </ControlCenter>

              {/* this will be made more modular in life */}
              {
                section.name == "identity" ? <Identity changeSection={changeSection} home={home} full={c} userModel={props.userModel}/> : homePage()
            }



              {isCart.cart ? <></> : <ControlCenter>
                <div className="w-full flex">
                  <div className="flex-auto hidden lg:flex bg-transparent  lg:w-1/2">

                  </div>
                  <div className="flex w-full lg:w-1/2 bg-white  text-white justify-end animated backInUp delay-1s">
                    <Button>
                      Orders
                      {/* <div className="w-full flex items-center">
                     
                      <span class="relative flex h-2 w-2  ">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-grey opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-grey"></span>
                        </span>
                      </div> */}
                    </Button>
                    <Button>Cart</Button>
                    <Button >Identity</Button>
                    {/* Gmabata Button */}
                    {/* <Button  click={() => setPlane(!plane)}>
                    <svg className={(plane ? "text-black":"text-grey")+" mx-2 pb-4 lg:pb-2 w-5 lg:w-6  stroke-current fill-current lg:hover:text-black"} viewBox="0 0 125 267"><g><path d="M62.5,0l62.5,125l-125,0l62.5,-125Z"/><path d="M62.5,141.667l62.5,125l-125,-0l62.5,-125Z"/></g></svg>
                    </Button> */}
                    <Button click={() => setMenu()}>

                      <svg className={(menu ? "text-black" : "text-grey") + " pb-4 lg:pb-2 w-10 lg:w-12  stroke-current fill-current lg:hover:text-black relative"} width="100%" height="100%" viewBox="0 0 267 267" version="1.1"><g><circle cx="62.5" cy="204.167" r="62.5" /><circle cx="62.5" cy="62.5" r="62.5" /><circle cx="204.167" cy="62.5" r="62.5" /><circle cx="204.167" cy="204.167" r="62.5" /></g>

                      </svg>

                    </Button>
                    {/* {message:"" action:[]} */}
                    <Alert open={alert.status} action={[{ dispatch: "", name: "Pay Now" }, { dispatch: (() => a({ status: false })), name: "Continue" }]} status={"Your items have been added to the cart"} />
                  </div>
                </div>

              </ControlCenter>

              }


            </Space>

          </div>
        </Stage>
      </Canvas>




    </>

  );
}




export default layout;
