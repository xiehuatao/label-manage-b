import React from 'react';
import navigationBar from './NavigationBar.module.css';

const NavigationBar = ()=>{
    return(
        <div className={navigationBar.navigationBarDiv}>
            <h1 className={navigationBar.classifyNavigation}>标签分类管理</h1>
            <h1 className={navigationBar.infoNavigation}>标签信息管理</h1>
        </div>
    )
}

export default NavigationBar;