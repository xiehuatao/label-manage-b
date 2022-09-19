import React from 'react';
import { Menu } from 'antd';
import navigationBar from './NavigationBar.module.css';

const NavigationBar = ()=>{
    return(
        <div className={navigationBar.navigationBarDiv}>
            {/*<h1 className={navigationBar.classifyNavigation}>标签分类管理</h1>*/}
            {/*<h1 className={navigationBar.infoNavigation}>标签信息管理</h1>*/}
            <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
                <Menu.Item key="classify" className={navigationBar.classifyNavigation}>
                    <div style={{fontSize:30,fontWeight:700}}>标签分类管理</div>
                </Menu.Item>
                <Menu.Item key="info" className={navigationBar.infoNavigation}>
                    <div style={{fontSize:30,fontWeight:700}}>标签信息管理</div>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default NavigationBar;