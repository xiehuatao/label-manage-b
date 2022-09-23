import {Input, Switch, Select, Button, DatePicker, Form} from "antd";
import * as React from "react";
import {useRef, useState} from "react";
import {Option} from "antd/es/mentions";
import BasicInfo from "./styled/BasicInfo";
import Required from "./styled/Required";
import Title from "./styled/Title";
import Second from "./styled/Second";
import ButtonArea from "./styled/ButtonArea";
import DescribeArea from "./styled/DescribeArea";
import Describe from "./styled/Describe";
import TimeArea from "./styled/TimeArea";
import Infomanage from "./styled/Infomanage";
import {useHistory} from "react-router-dom";
import Service from "../../service/service";



const Management = (props:object) => {
    const [time,setTime]=useState<String>("固定期限");
    const timeType=useRef<HTMLDivElement>(null);
    const timeArea=useRef<HTMLDivElement>(null);
    const showTimeSelect = () => {
        // @ts-ignore
        setTime(timeType.current.getElementsByTagName("span")[1].title);
        if (time==="固定期限"){
            // @ts-ignore
            timeArea.current.style.display="block";
        }
        else
            // @ts-ignore
            timeArea.current.style.display="none";
    }
    const history=useHistory();
    const cancel = () => {
        history.goBack()
    }
    const labelName=useRef<HTMLDivElement>(null)
    // @ts-ignore
    const state=props.location.state;
    function add() {
        if (state.operate==="check"){
            console.log("sss")
        }
        else if (state.operate==="update"){
            console.log(labelName.current)
        }
    }

    // if (state.code!=null){
    // Service({
    //     url:'/xx',
    //     params:{
    //         code:state.code
    //     }
    // }).then(function (response) {
    //     console.log(response.data)
    //
    // })}

const onFinish = (values:any) => {
    console.log(values)

    Service({
        url:"/ss",
        data:{
          values:values
        }
    }).then(function (response) {
        console.log(response.data)
        cancel()
    })
}
    return(
        <Form onFinish={onFinish}>
        <Infomanage>
            <BasicInfo>
                <div>
                    <Required>*</Required><Title onClick={()=>{
                        add()
                }}>标签名称</Title>
                </div>
                <div ref={labelName}>
                    <Form.Item name={"name"}>
                <Input className={"infoInput"} /></Form.Item></div>
            </BasicInfo>
            <BasicInfo>
                <div>
                    <Required>*</Required><Title>标签编码</Title>
                </div>
                <Form.Item name={"code"}>
                    <Input className={"infoInput"}/>
                </Form.Item>

            </BasicInfo>


            <BasicInfo>
                <div>
                   <Title>标签值</Title>
                </div>
                <Form.Item name={"labelValue"}>
                <Input className={"infoInput"}/></Form.Item>
            </BasicInfo>


            <BasicInfo>
                <div>
                    <Required>*</Required><Title>标签状态</Title>
                </div>
                <Form.Item name={"state"}>
                <Switch checkedChildren={"启用"} unCheckedChildren={"禁用"} defaultChecked={true} /></Form.Item>
            </BasicInfo>
            <Second>
            <BasicInfo>
                <div><Title>所属分类</Title></div>
                <Form.Item name={"classes"}>
                <Select className={"classType"} defaultValue={"--"}></Select></Form.Item>
            </BasicInfo>

            <BasicInfo ref={timeType}>
                <div>
                <Required>*</Required><Title>有效期</Title>
                </div>
                <Form.Item name={"timeType"}>
                <Select className={"classType"} onChange={()=>{
                    showTimeSelect();
                }} defaultValue={"永久"}>
                    <Option key={"永久"}>永久</Option>
                    <Option key={"固定期限"}>固定期限</Option>
                </Select></Form.Item>
            </BasicInfo>
                <TimeArea ref={timeArea}>

                    <BasicInfo>
                        <div>
                            <Required>*</Required><Title>起始日期</Title>
                        </div>
                        <Form.Item name={"begin"}>
                        <DatePicker className={"infoInput"} placeholder={"请选择起始日期"}/></Form.Item>
                    </BasicInfo>

                    <BasicInfo>
                        <div>
                            <Required>*</Required><Title>截止日期</Title>
                        </div>
                        <Form.Item name={"end"}>
                        <DatePicker className={"infoInput"} placeholder={"请选择截止日期"}/></Form.Item>
                    </BasicInfo>
                </TimeArea>
            </Second>
            <DescribeArea>
                    <div>
                        <Required>*</Required><Title>描述</Title>
                    </div>
                <Form.Item name={"describe"}>
                    <Describe/></Form.Item>
            </DescribeArea>
            <ButtonArea>
                <Button type={"primary"} className={"button"} htmlType={"submit"}>提交</Button>
                <Button type={"primary"} className={"button"} onClick={()=>{
                    cancel()
                }}>取消</Button>
            </ButtonArea>
        </Infomanage></Form>
    )
};
export default Management