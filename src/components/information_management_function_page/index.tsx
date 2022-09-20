import {Input, Switch, Select, Button, DatePicker} from "antd";
import "./index.css"
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



function Management() {
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
    return(
        <div>
            <BasicInfo>
                <div>
                    <Required>*</Required><Title>标签名称</Title>
                </div>
                <Input className={"infoInput"}/>
            </BasicInfo>
            <BasicInfo>
                <div>
                    <Required>*</Required><Title>标签编码</Title>
                </div>
                <Input className={"infoInput"}/>
            </BasicInfo>


            <BasicInfo>
                <div>
                   <Title>标签值</Title>
                </div>
                <Input className={"infoInput"}/>
            </BasicInfo>


            <BasicInfo>
                <div>
                    <Required>*</Required><Title>标签状态</Title>
                </div>
                <Switch checkedChildren={"启用"} unCheckedChildren={"禁用"} defaultChecked />
            </BasicInfo>


            <Second>
            <BasicInfo>
                <div><Title>所属分类</Title></div>
                <Select className={"classType"} defaultValue={"--"}></Select>
            </BasicInfo>

            <BasicInfo ref={timeType}>
                <div>
                <Required>*</Required><Title>有效期</Title>
                </div>
                <Select className={"classType"} onChange={()=>{
                    showTimeSelect();
                }} defaultValue={"Y"}>
                    <Option value={"Y"}>永久</Option>
                    <Option key={"G"}>固定期限</Option>
                </Select>
            </BasicInfo>
                <TimeArea ref={timeArea}>

                    <BasicInfo>
                        <div>
                            <Required>*</Required><Title>起始日期</Title>
                        </div>
                        <DatePicker className={"infoInput"} placeholder={"请选择起始日期"}/>
                    </BasicInfo>

                    <BasicInfo>
                        <div>
                            <Required>*</Required><Title>截止日期</Title>
                        </div>
                        <DatePicker className={"infoInput"} placeholder={"请选择截止日期"}/>
                    </BasicInfo>
                </TimeArea>
            </Second>
            <DescribeArea>
                    <div>
                        <Required>*</Required><Title>描述</Title>
                    </div>
                    <Describe/>
            </DescribeArea>
            <ButtonArea>
                <Button type={"primary"} className={"button"}>提交</Button>
                <Button type={"primary"} className={"button"}>取消</Button>
            </ButtonArea>
        </div>
    )
}
export default Management