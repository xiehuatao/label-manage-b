import {Button, Input, Select, Switch, Table} from "antd";
import "./index.css"
import {Option} from "antd/es/mentions";
import * as React from "react";

const ManagementPage = () => {
    const columns=[
        {
            title:'名称',
            dataIndex:'name',
            key:'name'
        },
        {
            title: '编码',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: '状态',
            dataIndex: 'state',
            key: 'state'
        },
        {
            title: '有效期',
            dataIndex: 'period',
            key: 'period',
        },
        {
            title: '所属分类',
            dataIndex: 'classes',
            key: 'classes'
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation'
        }
    ]
    const dataSouse=[
        {
            name:'重庆市',
            code:'YBQ',
            state: <Switch checkedChildren={"启用"} unCheckedChildren={"禁用"} defaultChecked />,
            period:'永久',
            classes:'系统标签',
            operation:<div><span>查看</span>   <span>修改</span></div>
        }
    ]
    return(
      <div>
          <div className={"name"}>
          <div>
              <b className={"title"}>名称</b>
          </div>
             <Input className={"infoInput"}/>
         </div>
          <div className={"name"}>
              <div>
                <b>编码</b>
              </div>
              <Input/>
          </div>
          <div className={"select"}>
            <div>
                <b>等级</b>
            </div>
            <div>
            </div>
           <Select className={"stateChoose"} defaultValue={"all"}>
               <Option value={"all"}>全部</Option>
               <Option value={"one"}>一级</Option>
               <Option value={"two"}>二级</Option>
               <Option value={"three"}>三级</Option>
           </Select>
        </div>
          <div className={"select"}>
              <div>
                  <b>上级标签</b>
              </div>
              <div>
              </div>
              <Select className={"stateChoose"} defaultValue={" "}>

              </Select>
          </div>
          <div className={"select"}>
              <div>
                  <b>类型</b>
              </div>
              <div>
              </div>
              <Select className={"stateChoose"} defaultValue={"all"}>
                  <Option value={"all"}>全部</Option>
                  <Option value={"one"}>普通标签</Option>
                  <Option value={"two"}>组合标签</Option>
              </Select>
          </div>
          <div className={"select"}>
              <div>
                  <b>所属分类</b>
              </div>
              <div>
              </div>
              <Select className={"stateChoose"} defaultValue={"one"}>
                  <Option value={"one"}>系统标签</Option>
                  <Option value={"two"}>自定义</Option>
              </Select>
          </div>
          <div className={"select"}>
              <div>
                  <b>状态</b>
              </div>
              <div>
              </div>
              <Select className={"stateChoose"} defaultValue={"all"}>
                  <Option value={"all"}>全部</Option>
                  <Option value={"one"}>禁用</Option>
                  <Option value={"two"}>启用</Option>
              </Select>
          </div>
          <div className={"buttonArea"}>
              <Button type={"primary"} >新增</Button>
              <Button type={"primary"} style={{marginLeft:40}}>添加标签分类</Button>
          </div>
          <div className={"tableArea"}>
              <Table columns={columns} dataSource={dataSouse}></Table>
          </div>
      </div>
  )
}

export default ManagementPage