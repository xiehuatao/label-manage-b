import ClassifyFunction from "../classify";
import * as React from "react";
import {Button} from "antd";
import CheckButtonAre from "../styled/checkButtonareas";
import Attached from "../attachedTable/attached";
import {useHistory} from "react-router-dom";

const CheckButton = () => {
    const history=useHistory();
 return(
     <div>
         <ClassifyFunction/>
         <CheckButtonAre><Button type={"primary"} onClick={()=>{
             history.goBack()
         }}>返回</Button></CheckButtonAre>
         <Attached/>
     </div>
 )
}

export default CheckButton