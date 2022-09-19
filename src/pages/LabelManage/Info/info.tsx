import React from 'react';
import ManagementPage from "../../../components/information_management_page";
import NavigationBar from "../../../components/NavigationBar/NavigationBar";
import infoStyle from "./Info.module.css"

const InfoManagement = ()=>{
    return(
        <div>
            <div className={infoStyle.navigationBar}>
                <NavigationBar/>
            </div>

            <div className={infoStyle.managementPage}>
                <ManagementPage/>
            </div>
        </div>
    )
}

export default InfoManagement;