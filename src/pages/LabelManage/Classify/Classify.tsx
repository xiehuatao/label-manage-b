import React from 'react';
import { Button,Input,Switch,Table} from 'antd';
import {Link, Route} from "react-router-dom";
import ManagementPage from "../../../components/information_management_page";
import Classifis from './styled/Classifis';
import Main from './styled/Main';
import ClassifyPages from './styled/ClassifyPage';
import Management from "../../../components/information_management_function_page";
import AddButton from "../../../components/information_management_Classification_page/classify/buttonA/AddButton";
import CheckButton from "../../../components/information_management_Classification_page/classify/buttonA/checkButton";

const Classify = ()=>{
    return(
        <Main>
        <div>
            <Route exact path={"/"} component={ClassifyPage}/>
            <Route path={"/add"} component={ManagementPage}/>
            <Route path={'/addManage'} component={Management}/>
            <Route path={"/addClass"} component={AddButton}/>
            <Route path={"/checkClass"} component={CheckButton}/>
        </div>
        </Main>
    )
}

const ClassifyPage = ()=>{
    return(
        <ClassifyPages>
            <Search/>
            <AddBtn/>
            <ClassifyTable/>
        </ClassifyPages>
    )
}

const Search = ()=>{
    return(
        <Classifis>
            <ClassifyName/>
            <ClassifyEncoded/>
            <Status/>
            <Button type="primary" style={{position:"absolute",left:830,top:22,width:75,height:35}}>搜索</Button>
        </Classifis>
    )
}

const ClassifyName= ()=>{
    return(
        <div className={"classifyName"}>
            <span >
                <label className={"searchTitleFont"}>类型</label>
                <br/>
                <Input style={{width:232,height:30,borderColor:"black"}}/>
            </span>
        </div>
    )
}
const ClassifyEncoded= ()=>{
    return(
        <div className={"classifyEncoded"}>
            <span >
                <label className={"searchTitleFont"}>编码</label>
                <br/>
                <Input style={{width:232,height:30,borderColor:"black"}}/>
            </span>
        </div>
    )
}
const Status= ()=>{
    return(
        <div className={"status"}>
            <span >
                <label className={"searchTitleFont"}>状态</label>
                <br/>
                <select style={{width:187,height:30,borderColor:"black"}}>
                    <option>所有</option>
                    <option>启用</option>
                    <option>禁用</option>
                </select>
            </span>
        </div>
    )
}

const AddBtn = ()=>{
    return(
        // <button style={{position:"relative",left:66,top:-30,width:66,height:27}}>新增</button>
     <Link to={{pathname:'/addClass',state:{operate:"add"}}}><Button type="primary" style={{position:"relative",left:66,top:-30,width:75,height:35}}>新增</Button></Link>
)
}

const ClassifyTable = ()=>{
    const dataSource = [
        {
            key: '1',
            type:'系统标签',
            code:'XTBM',
            describe:'123',
            availableUsers:'供应商',
            status:<Switch checkedChildren="启用" unCheckedChildren="禁用" defaultChecked />,
            option: <div>
                    <Link to={{pathname:'/checkClass',state:{operate: "check"}}}  style={{position:"absolute",left:0,top:15}}>查看</Link>
                    <Link to={{pathname:"/addClass",state:{operate:'update'}}} style={{position:"absolute",left:40,top:15}}>修改</Link>
                    </div>
        },
    ];

    const columns = [
        {
            title: '分类类型',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '编码',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: '描述',
            dataIndex: 'describe',
            key: 'describe',
        },
        {
            title: '可用用户类型',
            dataIndex: 'availableUsers',
            key: 'availableUsers',
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: '操作',
            dataIndex: 'option',
            key: 'option',
        },
    ];

    return(
        <Table dataSource={dataSource} columns={columns} style={{position:"relative",left:66,width:1500,textAlign:"center"}}/>
)
}
export default Classify;