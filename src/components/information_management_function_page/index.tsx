import {Input, Switch, Select, Button, DatePicker, Form, InputRef} from "antd";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
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
    const dat={name:"",code:"",value:"",state:true,classes:"",timeType:"",begin:"",end:"",describe:""}
    const [data,setDate]=useState(dat);
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
    // @ts-ignore
    const state=props.location.state;
    const InitialData=()=>{

        Service({
            url:"/xxx",
            data:{
                code:state.code
            }
        }).then(function (response) {
            console.log(response.data)
            setDate(JSON.parse(response.data));
        })
    }
    const labelName=useRef<InputRef>(null)
    const labelCode=useRef<InputRef>(null)
    const labelValue=useRef<InputRef>(null)
    const labelState=useRef<HTMLElement>(null)
    const labelClasses=useRef(null)

    const [disabled,setDisabled]=useState(false)
    useEffect(()=>{
            if (state.operate==="check"){
                InitialData();
                // @ts-ignore
                labelName.current.input.disabled=true
                // @ts-ignore
                labelCode.current.input.disabled=true
                // @ts-ignore
                labelValue.current.input.disabled=true
                setDisabled(true)
            }
            else if (state.operate==="update"){
                InitialData();
                // @ts-ignore
                labelName.current.input.disabled=true
                // @ts-ignore
                labelCode.current.input.disabled=true
        }
    },[])


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
    let {name,code,labelValue,state,classes,timeType,begin,end,describe}=values;
    if (begin!==undefined&&end!==undefined){
     end=end.format("YYYY-MM-DD")
     begin=begin.format("YYYY-MM-DD")
    }else {
        end="0000-00-00"
        begin="0000-00-0"
    }
    Service({
        url:"/ss",
        data:{
            name:name,
            code:code,
            labelValue:labelValue,
            state:state,
            classes:classes,
            timeType:timeType,
            begin:begin,
            end:end,
            describe:describe
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
                    <Required>*</Required><Title>标签名称</Title>
                </div>
                <div>
                    <Form.Item name={"name"}>
                <Input className={"infoInput"} ref={labelName} value={data.name}/></Form.Item></div>
            </BasicInfo>
            <BasicInfo>
                <div>
                    <Required>*</Required><Title>标签编码</Title>
                </div>
                <Form.Item name={"code"}>
                    <Input className={"infoInput"} ref={labelCode} value={data.code}/>
                </Form.Item>

            </BasicInfo>


            <BasicInfo>
                <div>
                   <Title>标签值</Title>
                </div>
                <Form.Item name={"labelValue"}>
                <Input className={"infoInput"} ref={labelValue} value={data.value}/></Form.Item>
            </BasicInfo>


            <BasicInfo>
                <div>
                    <Required>*</Required><Title>标签状态</Title>
                </div>
                <Form.Item name={"state"}>
                <Switch checkedChildren={"启用"} unCheckedChildren={"禁用"} checked={data.state} ref={labelState} disabled={disabled} /></Form.Item>
            </BasicInfo>
            <Second>
            <BasicInfo>
                <div><Title>所属分类</Title></div>
                <Form.Item name={"classes"}>
                <Select className={"classType"} defaultValue={"--"} ref={labelClasses} disabled={disabled} value={data.classes}></Select></Form.Item>
            </BasicInfo>

            <BasicInfo ref={timeType}>
                <div>
                <Required>*</Required><Title>有效期</Title>
                </div>
                <Form.Item name={"timeType"}>
                <Select className={"classType"} onChange={()=>{
                    showTimeSelect();
                }} defaultValue={"永久"} disabled={disabled} value={data.timeType}>
                    <Select.Option key={"永久"}>永久</Select.Option>
                    <Select.Option key={"固定期限"}>固定期限</Select.Option>
                </Select></Form.Item>
            </BasicInfo>
                <TimeArea ref={timeArea}>

                    <BasicInfo>
                        <div>
                            <Required>*</Required><Title>起始日期</Title>
                        </div>
                        <Form.Item name={"begin"}>
                        <DatePicker className={"infoInput"} placeholder={"请选择起始日期"} disabled={disabled}/></Form.Item>
                    </BasicInfo>

                    <BasicInfo>
                        <div>
                            <Required>*</Required><Title>截止日期</Title>
                        </div>
                        <Form.Item name={"end"}>
                        <DatePicker className={"infoInput"} placeholder={"请选择截止日期"} disabled={disabled}/></Form.Item>
                    </BasicInfo>
                </TimeArea>
            </Second>
            <DescribeArea>
                    <div>
                        <Required>*</Required><Title>描述</Title>
                    </div>
                <Form.Item name={"describe"}>
                    <Describe disabled={disabled} value={data.describe}/></Form.Item>
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