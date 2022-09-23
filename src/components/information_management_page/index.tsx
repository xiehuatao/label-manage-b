import {Button, Input, Select, Switch, Table} from "antd";
import {Option} from "antd/es/mentions";
import * as React from "react";
import Name from "./styled/Name";
import Title from "../information_management_function_page/styled/Title";
import Selects from "./styled/Select";
import ButtonAre from "./styled/Buttonare";
import Div from "./styled/All";
import {Link} from "react-router-dom";
import AddType from "./styled/addType";
import {useRef} from "react";


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
            operation:<div><Link to={"/addManage"} onClick={()=>{
                        checkManage()
                }
            }>查看</Link>   <Link to={"/addManage"}>修改</Link></div>
        }
    ]
    const checkManage = () => {
        // @ts-ignore
      let links=CheckManage.current.getElementsByTagName("a");
      // @ts-ignore
      let checks=[];
        for (let i = 0; i < links.length; i++) {
            if (links[i].innerHTML==="查看"){
                checks.push(links[i])
            }
        }
        for (let i = 0; i < checks.length; i++) {
            console.log(dataSouse[i].code)
        }
    }
    const CheckManage=useRef<HTMLDivElement>(null)
    const addType=useRef<HTMLDivElement>(null);
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
             <Link to={"/addManage"}><Button type={"primary"} >新增</Button></Link>
          <Button type={"primary"} style={{marginLeft:40}} onClick={()=>{
              // @ts-ignore
              addType.current.style.display="block";
          }}>添加标签分类</Button>
          </ButtonAre>

          <ButtonAre>

              <Table columns={columns} dataSource={dataSouse} ref={CheckManage}></Table>

          </ButtonAre>
          <AddType ref={addType}>
              <div><Title>标签名称</Title><Input/></div>
              <div><Title>所属分类</Title><Input/></div>
              <div style={{float:"left",marginRight:40,marginLeft:100,marginTop:20}}><Button type={"primary"}>确定</Button></div>
              <div style={{marginTop:20}}><Button type={"primary"} onClick={()=>{
                  // @ts-ignore
                  addType.current.style.display="none"
              }}>取消</Button></div>
          </AddType>
      </Div>
  )
}

export default ManagementPage