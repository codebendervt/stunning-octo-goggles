import React from 'react';
import {InputText,InputNumber,Select} from '../../../components/'

export default (data,dispatch) =>{

    switch(data.type){
        case "string":
            return (<InputText key={data.name} useLabel={false} placeholder="Enter Answer" dispatch={dispatch}/>)
         
        case "number":
            return (<InputNumber key={data.name} useLabel={false} placeholder="0" dispatch={dispatch}/>)

        case "select":
            return <Select key={data.name} data={data.value} dispatch={dispatch}/>
          
        default:
            console.info("no data type identified");
    }
}