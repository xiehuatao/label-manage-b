import {Input, Switch, Select, Button} from "antd";
import "./index.css"
import Inputs from "./infoComponents/input";
import DateChoose from "./infoComponents/dateChoose";
import Textarea from "./infoComponents/textarea";
import * as React from "react";
import {useRef, useState} from "react";



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
            {Inputs("标签名称")}
            {Inputs("标签编码")}
            <div className={"basicInfo"}>
                <div>
                   <b className={"title"}>标签值</b>
                </div>
                <Input className={"infoInput"}/>
            </div>
            <div className={"basicInfo"}>
                <div>
                    <b className={"must"}>*</b><b className={"title"}>标签状态</b>
                </div>
                <Switch checkedChildren={"启用"} unCheckedChildren={"禁用"} defaultChecked />
            </div>
            <div className={"second"}>
            <div className={"basicInfo"}>
                <div><b className={"title"}>所属分类</b></div>
                <Select className={"classType"} defaultValue={"--"}></Select>
            </div>
            <div className={"timeType"} ref={timeType}>
                <div>
                <b className={"must"}>*</b><b className={"title"}>有效期</b>
                </div>
                <Select className={"classType"} onChange={()=>{
                    showTimeSelect();
                }} defaultValue={"Y"}>
                    <Select.Option key={"Y"}>永久</Select.Option>
                    <Select.Option key={"G"}>固定期限</Select.Option>
                </Select>
            </div>
                <div className={"timeArea"} ref={timeArea}>
                    {DateChoose("起始日期","请选择起始日期")}
                    {DateChoose("截止日期","请选择截止日期")}
                </div>
            </div>
            <div className={"describeArea"}>
            <Textarea/>
            </div>
            <div className={"buttonArea"}>
                <Button type={"primary"} className={"button"}>提交</Button>
                <Button type={"primary"} className={"button"}>取消</Button>
            </div>
        </div>
    )
}
export default Management