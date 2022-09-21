import ClassContent from "../styled/classContent";
import ButtonAreas from "../styled/buttonAreas";
import {Button} from "antd";
import * as React from "react";
import ClassifyFunction from "../classify";
import {useHistory} from "react-router-dom";


const AddButton = () => {
    const history=useHistory();
    return(<div>
        <ClassifyFunction/>
        <ClassContent>
            <ButtonAreas>
                <Button type={"primary"}>提交</Button></ButtonAreas>
            <ButtonAreas>
                <Button type={"primary"} onClick={()=>{
                    history.goBack()
                }}>取消</Button></ButtonAreas>
        </ClassContent></div>
    )
}
export default AddButton