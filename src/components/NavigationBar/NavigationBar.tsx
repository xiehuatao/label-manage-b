import React from 'react';
import { Menu } from 'antd';
import navigationBar from './NavigationBar.module.css'
import {Link} from "react-router-dom";

const NavigationBar = ()=>{
    return(
        <Menu mode="horizontal" defaultSelectedKeys={['classify']} className={navigationBar.menu}>
            <Menu.Item key="classify">
              <Link to={"/"}> 标签分类管理</Link>
            </Menu.Item>
            <Menu.Item key="info">
              <Link to={"/add"}> 标签信息管理</Link>
        </Menu.Item>
        </Menu>
    )
}

export default NavigationBar;