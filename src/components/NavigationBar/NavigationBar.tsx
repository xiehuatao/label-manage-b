import React from 'react';
import { Menu } from 'antd';
import {Link} from "react-router-dom";
import Navige from "./styled/Naviga";

const NavigationBar = ()=>{
    return(
        <Navige>
        <Menu mode="horizontal" defaultSelectedKeys={['classify']} className={"menu"}>
            <Menu.Item key="classify">
              <Link to={"/main/"}>标签分类管理</Link>
            </Menu.Item>
            <Menu.Item key="info">
              <Link to={"/main/add"}> 标签信息管理</Link>
        </Menu.Item>
        </Menu>
        </Navige>
    )
}

export default NavigationBar;