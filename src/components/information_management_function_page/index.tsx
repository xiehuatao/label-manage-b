import {Input, Switch, Select, Button, DatePicker} from "antd";
import "./index.css"
import * as React from "react";
import {useRef, useState} from "react";
import {Option} from "antd/es/mentions";



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
            <div className={"basicInfo"}>
                <div>
                    <b className={"must"}>*</b><b className={"title"}>标签名称</b>
                </div>
                <Input className={"infoInput"}/>
            </div>
            <div className={"basicInfo"}>
                <div>
                    <b className={"must"}>*</b><b className={"title"}>标签编码</b>
                </div>
                <Input className={"infoInput"}/>
            </div>
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
                    <Option value={"Y"}>永久</Option>
                    <Option key={"G"}>固定期限</Option>
                </Select>
            </div>
                <div className={"timeArea"} ref={timeArea}>
                    <div className={"timeChoose"}>
                        <div>
                            <b className={"must"}>*</b><b className={"title"}>起始日期</b>
                        </div>
                        <DatePicker className={"infoInput"} placeholder={"请选择起始日期"}/>
                    </div>
                    <div className={"timeChoose"}>
                        <div>
                            <b className={"must"}>*</b><b className={"title"}>截止日期</b>
                        </div>
                        <DatePicker className={"infoInput"} placeholder={"请选择截止日期"}/>
                    </div>
                </div>
            </div>
            <div className={"describeArea"}>
                <div className={"textarea"}>
                    <div>
                        <b className={"must"}>*</b><b className={"title"}>描述</b>
                    </div>
                    <textarea className={"describe"}/>
                </div>
            </div>
            <div className={"buttonArea"}>
                <Button type={"primary"} className={"button"}>提交</Button>
                <Button type={"primary"} className={"button"}>取消</Button>
            </div>
        </div>
    )
}
export default Management