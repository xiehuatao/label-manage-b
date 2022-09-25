
import * as React from "react";
import {Input, InputRef, Switch} from "antd";
import Required from "../../information_management_function_page/styled/Required";
import Title from "../../information_management_function_page/styled/Title";
import Describe from "../../information_management_function_page/styled/Describe";
import ClassifyInfo from "./styled/ClassifyInfo";
import ClassInput from "./styled/classInput";
import ClassContent from "./styled/classContent";
import TypeChoose from "./styled/typeChoose";
import {useContext, useEffect, useRef, useState} from "react";
import {MyContext} from "./buttonA/AddButton";
import {d} from "@pmmmwh/react-refresh-webpack-plugin/types/options";


const ClassifyFunction = () => {
    const name=useRef<InputRef>(null)
    const code=useRef<InputRef>(null)
    const [disabled,setDisabled]=useState(false)
    const context=useContext(MyContext)
    useEffect(()=>{
        if (context==="update"){
            // @ts-ignore
            name.current.input.disabled=true;
            // @ts-ignore
            code.current.input.disabled=true
        }
        else if (context==="check"){
            setDisabled(true)
        }
    })
  return (
    <ClassifyInfo>
        <div style={{float:"left"}}>
        <div>
            <Required>*</Required><Title>类型名称</Title>
        </div>
        <div><Input ref={name} disabled={disabled}/></div>
        </div>

        <ClassInput>
            <div><Required>*</Required><Title>类型编码</Title></div>
            <div><Input ref={code} disabled={disabled}/></div>
        </ClassInput>
        <ClassInput>
            <br/>
            <Switch checkedChildren={"启用"} unCheckedChildren={"禁用"} defaultChecked disabled={disabled}/>
        </ClassInput>

        <div style={{marginTop:80}}>
        <div>
            <Required>*</Required><Title>描述</Title>
        </div>
        <Describe disabled={disabled}/></div>
        <ClassContent>
            <div><Required>*</Required><Title>可选用户分类</Title> <input type={"checkbox"} disabled={disabled}/><Title>全选</Title></div>
                <TypeChoose><input type={"checkbox"} disabled={disabled}/><Title>普通用户</Title></TypeChoose>
                <TypeChoose><input type={"checkbox"} disabled={disabled}/><Title>管理员</Title></TypeChoose>
        </ClassContent>


        <ClassContent>
            <div>
                <Title>备注</Title>
            </div>
            <Describe disabled={disabled}/></ClassContent>
    </ClassifyInfo>
  )
}
export default ClassifyFunction