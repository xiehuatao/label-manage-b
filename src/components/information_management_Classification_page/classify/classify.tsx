
import * as React from "react";
import { Input, Switch} from "antd";
import Required from "../../information_management_function_page/styled/Required";
import Title from "../../information_management_function_page/styled/Title";
import Describe from "../../information_management_function_page/styled/Describe";
import ClassifyInfo from "./styled/ClassifyInfo";
import ClassInput from "./styled/classInput";
import ClassContent from "./styled/classContent";
import TypeChoose from "./styled/typeChoose";


const ClassifyFunction = () => {
  return (
    <ClassifyInfo>
        <div style={{float:"left"}}>
        <div>
            <Required>*</Required><Title>类型名称</Title>
        </div>
        <div><Input/></div>
        </div>

        <ClassInput>
            <div><Required>*</Required><Title>类型编码</Title></div>
            <div><Input/></div>
        </ClassInput>
        <ClassInput>
            <br/>
            <Switch checkedChildren={"启用"} unCheckedChildren={"禁用"} defaultChecked/>
        </ClassInput>

        <div style={{marginTop:80}}>
        <div>
            <Required>*</Required><Title>描述</Title>
        </div>
        <Describe/></div>
        <ClassContent>
            <div><Required>*</Required><Title>可选用户分类</Title> <input type={"checkbox"}/><Title>全选</Title></div>
                <TypeChoose><input type={"checkbox"}/><Title>普通用户</Title></TypeChoose>
                <TypeChoose><input type={"checkbox"}/><Title>管理员</Title></TypeChoose>
        </ClassContent>


        <ClassContent>
            <div>
                <Title>备注</Title>
            </div>
            <Describe/></ClassContent>
    </ClassifyInfo>
  )
}
export default ClassifyFunction