import Title from "../../../information_management_function_page/styled/Title"
import {Button, Input, Select, Switch, Table} from "antd";
import TableAre from "../styled/tableAre";
import TableAreButton from "../styled/tableAreButton";
import {Option} from "antd/es/mentions";
import LabelSelected from "../styled/labelToBeSelected";
import ClassInput from "../styled/classInput";
import SelectedTag from "../styled/selectedTag";
import {useRef} from "react";

const Attached = () => {

    const columns=[
        {
            title:'  ',
            dataIndex:'check',
            key:'check'
        },
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '编码',
            dataIndex: 'number',
            key: 'number'
        },
        {
            title: '标签值',
            dataIndex: 'value',
            key: 'value'
        },
        {
            title: '状态',
            dataIndex: 'state',
            key: 'state'
        },
        {
            title: '有效期',
            dataIndex: 'time',
            key: 'time'
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
    const dataSource=[
        {
            check: <input type={"checkbox"}/>,
            name:'区域',
            number:'AREA',
            value:'1',
            state:<Switch checkedChildren={"启用"} unCheckedChildren={"禁用"} defaultChecked/>,
            time:'永久',
            classes:'系统标签',
            operation:<a>删除</a>
        }
    ]
    const column=[
        {
            title:'  ',
            dataIndex:'check',
            key:'check'
        },
        {
            title: '名称',
            dataIndex:'name',
            key:'name',
        },
        {
            title: '编码',
            dataIndex:'code',
            key:'code'
        },
        {
            title: '等级',
            dataIndex: 'leave',
            key: 'leave'
        },
        {
            title: '上级标签',
            dataIndex: 'label',
            key: 'label'
        }
    ]
    const data=[
        {
            check:<input type={"checkbox"}/>,
            name:'区域',
            code:'AREA',
            leave:'一级',
            label:'--',
        }
    ]
    const labelSelected=useRef<HTMLDivElement>(null);
    return(
        <div>
        <TableAre>
            <div><Title>依附标签</Title></div>
            <div style={{marginTop:20}}>
                <div style={{float:"left"}}><Button type={"primary"}>删除</Button></div>
                <TableAreButton><Button type={"primary"} onClick={()=>{
                    // @ts-ignore
                    labelSelected.current.style.display='block';
                }}>新增</Button></TableAreButton>
                <TableAreButton><Button type={"primary"}>启用</Button></TableAreButton>
                <TableAreButton><Button type={"primary"}>禁用</Button></TableAreButton>
            </div>
            <div style={{marginTop:20}}>
            <Table columns={columns} dataSource={dataSource}>

            </Table></div>
        </TableAre>
            <LabelSelected ref={labelSelected}>
                <div style={{width:600}}>
                <div style={{float:"left"}}>
                    <div>
                        <Title>名称</Title></div>
                    <div><Input/></div>
                </div>

                <ClassInput>
                    <div><Title>编码</Title>
                        <div><Input/></div>
                    </div>
                </ClassInput>

                <ClassInput>
                    <div><Title>等级</Title></div>
                    <Select defaultValue={"all"}>
                        <Option value={"all"}>全部</Option>
                        <Option value={"first"}>一级</Option>
                        <Option value={"second"}>二级</Option>
                        <Option value={"third"}>三级</Option>
                    </Select>
                </ClassInput>
                <br/><br/><br/>
                <div>
                    <div><Title>待选标签</Title></div>
                    <div>
                        <Table columns={column} dataSource={data}></Table>
                    </div>
                </div>

                </div>
                <SelectedTag>
                    <Title>已选标签</Title>
                </SelectedTag>
                <div>
                    <TableAreButton><Button type={"primary"}>新增</Button></TableAreButton>
                    <TableAreButton><Button type={"primary"} onClick={()=>{
                        // @ts-ignore
                        labelSelected.current.style.display='none';
                    }}>取消</Button></TableAreButton>
                </div>
            </LabelSelected>

        </div>
    )
}

export default Attached