import ClassifyFunction from "../classify";
import * as React from "react";
import {Button} from "antd";
import CheckButtonAre from "../styled/checkButtonareas";
import Attached from "../attachedTable/attached";
import {useHistory} from "react-router-dom";
import {MyContext} from "./AddButton";


const CheckButton = (props:object) => {
    const history=useHistory();
    // @ts-ignore
    const state=props.location.state.operate;
 return(
     <div>
         <MyContext.Provider value={state}>
         <ClassifyFunction/>
         </MyContext.Provider>
         <CheckButtonAre><Button type={"primary"} onClick={()=>{
             history.goBack()
         }}>返回</Button></CheckButtonAre>
         <Attached/>
     </div>
 )
}

export default CheckButton