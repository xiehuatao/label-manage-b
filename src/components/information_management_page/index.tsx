import {Button, Input, Select, Switch, Table} from "antd";
import {Option} from "antd/es/mentions";
import * as React from "react";
import Name from "./styled/Name";
import Title from "../information_management_function_page/styled/Title";
import Selects from "./styled/Select";
import ButtonAre from "./styled/Buttonare";
import Div from "./styled/All";

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
      <Div>
          <Name>
          <div>
              <Title>名称</Title>
          </div>
             <Input className={"infoInput"}/>
         </Name>
          <Name>
              <div>
                <Title>编码</Title>
              </div>
              <Input/>
          </Name>
          <Selects>
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
        </Selects>
          <Selects>
              <div>
                  <b>上级标签</b>
              </div>
              <div>
              </div>
              <Select className={"stateChoose"} defaultValue={" "}>
              </Select>
          </Selects>
          <Selects>
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
          </Selects>
          <Selects>
              <div>
                  <b>所属分类</b>
              </div>
              <div>
              </div>
              <Select className={"stateChoose"} defaultValue={"one"}>
                  <Option value={"one"}>系统标签</Option>
                  <Option value={"two"}>自定义</Option>
              </Select>
          </Selects>
          <Selects>
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
          </Selects>
          <ButtonAre>
              <Button type={"primary"} >新增</Button>
              <Button type={"primary"} style={{marginLeft:40}}>添加标签分类</Button>
          </ButtonAre>
          <ButtonAre>
              <Table columns={columns} dataSource={dataSouse}></Table>
          </ButtonAre>
      </Div>
  )
}

export default ManagementPage