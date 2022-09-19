import React from 'react';
import NavigationBar from "../../../components/NavigationBar/NavigationBar";
import classify from './Classify.module.css';
import { Button,Input,Switch,Table,Space,Tag  } from 'antd';
import {Route} from "react-router-dom";
import ManagementPage from "../../../components/information_management_page";



const Classify = ()=>{
    return(
        <div style={{position:"relative"}}>
            <NavigationBar/>
            <Route path={"/"} component={ClassifyPage}/>
            <Route path={"/add"} component={ManagementPage}/>
        </div>
    )
}

const ClassifyPage = ()=>{
    return(
        <div>
            <Search/>
            <AddBtn/>
            <ClassifyTable/>
        </div>
    )
}

const Search = ()=>{
    return(
        <div className={classify.div}>
            <ClassifyName/>
            <ClassifyEncoded/>
            <Status/>
            {/*<button style={{position:"absolute",left:830,top:27,width:66,height:27}}>搜索</button>*/}
            <Button type="primary" style={{position:"absolute",left:830,top:22,width:75,height:35}}>搜索</Button>
        </div>
    )
}

const ClassifyName= ()=>{
    return(
        <div className={classify.classifyName}>
            <span >
                <label className={classify.searchTitleFont}>类型</label>
                <br/>
                {/*<input type="text" style={{width:232,height:30}}/>*/}
                <Input style={{width:232,height:30,borderColor:"black"}}/>
            </span>
        </div>
    )
}
const ClassifyEncoded= ()=>{
    return(
        <div className={classify.classifyEncoded}>
            <span >
                <label className={classify.searchTitleFont}>编码</label>
                <br/>
                {/*<input type="text" style={{width:232,height:30}}/>*/}
                <Input style={{width:232,height:30,borderColor:"black"}}/>
            </span>
        </div>
    )
}
const Status= ()=>{
    return(
        <div className={classify.status}>
            <span >
                <label className={classify.searchTitleFont}>状态</label>
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
        <Button type="primary" style={{position:"relative",left:66,top:-30,width:75,height:35}}>新增</Button>
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
            option:<div><Button type="link" style={{position:"absolute",left:0,top:15}}>查看</Button><Button type="link" style={{position:"absolute",left:40,top:15}}>修改</Button></div>
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