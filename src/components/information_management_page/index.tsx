import {Button, Input, Select, Switch, Table} from "antd";
import {Option} from "antd/es/mentions";
import * as React from "react";
import Name from "./styled/Name";
import Title from "../information_management_function_page/styled/Title";
import Selects from "./styled/Select";
import ButtonAre from "./styled/Buttonare";
import Div from "./styled/All";
import {Link} from "react-router-dom";
import {useRef, useState} from "react";


const ManagementPage = () => {
    //定义表格的每一列
    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name'
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

    //存储标签信息的状态
    const [labInfo,setLabelInfo] = useState({
        name:'1',
        encode:'1',
        grade:'全部',
        top:'1',
        type:'全部',
        intype:'系统标签',
        status:'全部'
    });
    //存储从后端获取的表格数据
    const [tabInfo,setTabInfo] = useState([
        {
            name: "区域",
            code: 'AREA',
            state: true,
            period: '永久',
            classes: '系统标签',
        },
        {
            name: "重庆市",
            code: 'YBQ',
            state: true,
            period: '永久',
            classes: '系统标签',
        }
    ]);
    //存储渲染到页面上的表格的数据
    const [dataSouse,setDataSouse]= useState([]);

    //生命周期函数，把后端获取的数据放到表格的dataSouse
    React.useEffect(()=>{
            // axios({
            //     method:"get",
            //     url:"",
            //     params:{labInfo}
            // }).then(()=>{
            //     // setTabInfo(response.data);
            //     console.log(dataSouse);
            //     dataSouse=tabInfo.map((item)=>{
            //         return {
            //             name: item.name,
            //             code: item.code,
            //             state: <Switch checkedChildren={"启用"} unCheckedChildren={"禁用"} checked={item.state}/>,
            //             period:item.period,
            //             classes: item.classes,
            //             operation: <div><Link to={"/addManage"}>查看</Link> <Link to={"/addManage"}>修改</Link></div>
            //         };
            //     })
            // })
            const newDataSouse=tabInfo.map((item)=>{
                return {
                    name: item.name,
                    code: item.code,
                    state: <Switch checkedChildren={"启用"} unCheckedChildren={"禁用"} checked={item.state}/>,
                    period:item.period,
                    classes: item.classes,
                    operation: <div><Link to={{pathname:"/addManage",state:{code:item.code,operate:"check"}}}>查看</Link>
                        <Link to={{pathname:"/addManage",state:{code: item.code,operate: "update"}}}>修改</Link></div>
                };
            });

            // @ts-ignore
            setDataSouse(newDataSouse);

            return ()=>{

            }
        }
        ,
        [labInfo]
    )

    const addType = useRef<HTMLDivElement>(null);

    //改变输入名称时
    function changeName(value:any){
        let label=labInfo;
        label.name=value.target.value;
        setLabelInfo(label);
        console.log(value.target.value)
    }
    //改变输入编码时
    function changeEncode(value:any){
        let label=labInfo;
        label.encode=value.target.value;
        setLabelInfo(label);
        console.log(value.target.value)
    }
    //改变等级时
    function changeGrade(value:any){
        let label=labInfo;
        label.grade=value;
        setLabelInfo(label);
        console.log(value);
    }
    //改变上级标签时
    function changeTop(value:any){
        let label=labInfo;
        label.top=value.target.value;
        setLabelInfo(label);
        console.log(value.target)
    }
    //改变标签类别时
    function changeType(value:any){
        let label=labInfo;
        label.type=value;
        setLabelInfo(label);
        console.log(value)
    }
    //改变所属类型时
    function changeIntype(value:any){
        let label=labInfo;
        label.intype=value;
        setLabelInfo(label);
        console.log(value)
    }
    //改变状态时
    function changeStatus(value:any){
        let label=labInfo;
        label.status=value;
        setLabelInfo(label);
        console.log(value)
    }

    const {Option} = Select


    return (
        <Div>
            <Name>
                <div>
                    <Title>名称</Title>
                </div>
                <Input className={"labNamInput"} onChange={changeName} />
            </Name>
            <Name>
                <div>
                    <Title>编码</Title>
                </div>
                <Input onChange={changeEncode}/>
            </Name>
            <Selects>
                <div>
                    <b>所属分类</b>
                </div>
                <div>
                </div>
                <Select className={"stateChoose"} defaultValue={"系统标签"} onChange={changeIntype}>
                    <Option value={"系统标签"}>系统标签</Option>
                    <Option value={"自定义"}>自定义</Option>
                </Select>
            </Selects>
            <Selects>
                <div>
                    <b>状态</b>
                </div>
                <div>
                </div>
                <Select className={"stateChoose"} defaultValue={"全部"} onChange={changeStatus}>
                    <Option value={"全部"}>全部</Option>
                    <Option value={"禁用"}>禁用</Option>
                    <Option value={"启用"}>启用</Option>
                </Select>
            </Selects><br/>
            <Selects><Button type={"primary"}>搜索</Button></Selects>
            <ButtonAre>
                <Link to={{pathname:"/addManage",state:{operate:"add"}}}><Button type={"primary"}>新增</Button></Link>
            </ButtonAre>

            <ButtonAre>

                <Table columns={columns} dataSource={dataSouse}></Table>

            </ButtonAre>
        </Div>
    )
}

export default ManagementPage