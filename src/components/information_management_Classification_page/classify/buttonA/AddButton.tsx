import ClassContent from "../styled/classContent";
import ButtonAreas from "../styled/buttonAreas";
import {Button} from "antd";
import * as React from "react";
import ClassifyFunction from "../classify";
import {useHistory} from "react-router-dom";
import {createContext} from "react";

export const MyContext=createContext(null);
const AddButton = (props:object) => {

    const history=useHistory();
    // @ts-ignore
    const state=props.location.state.operate

    return(
        <div>
            <MyContext.Provider value={state}>
        <ClassifyFunction />
            </MyContext.Provider>
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