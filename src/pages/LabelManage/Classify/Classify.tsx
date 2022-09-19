import React from 'react';
import ReactDOM from 'react-dom'
import NavigationBar from "../../../components/NavigationBar/NavigationBar";
import classify from './Classify.module.css';
import { Button,Input,Switch,Table,Space,Tag  } from 'antd';


//import type { InputRef } from 'antd';
// import { Button, Form, Input, Popconfirm, Table } from 'antd';
// import type { FormInstance } from 'antd/es/form';
// import React, { useContext, useEffect, useRef, useState } from 'react';

const Classify = ()=>{
    return(
        <div style={{position:"relative"}}>
            <NavigationBar/>
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
                <Input style={{width:232,height:30}}/>
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
                <Input style={{width:232,height:30}}/>
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
                <select style={{width:187,height:30}}>
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
    const { Column, ColumnGroup } = Table;
    return(
        <Table>
            <Column title="分类类型" dataIndex="age" key="age" />
            <Column title="编码" dataIndex="address" key="address" />
            <Column title="描述" dataIndex="address" key="address" />
            <Column title="可用用户类型" dataIndex="address" key="address" />
            <Column title="状态" dataIndex="address" key="address" />
            <Column title="操作" dataIndex="address" key="address" />
            {/*<Column*/}
            {/*    title="Tags"*/}
            {/*    dataIndex="tags"*/}
            {/*    key="tags"*/}
            {/*    render={(tags: string[]) => (*/}
            {/*        <>*/}
            {/*            {tags.map(tag => (*/}
            {/*                <Tag color="blue" key={tag}>*/}
            {/*                    {tag}*/}
            {/*                </Tag>*/}
            {/*            ))}*/}
            {/*        </>*/}
            {/*    )}*/}
            {/*/>*/}
        </Table>
    )
}
export default Classify;