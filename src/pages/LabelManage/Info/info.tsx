import React from 'react';
import ManagementPage from "../../../components/information_management_page";
import NavigationBar from "../../../components/NavigationBar/NavigationBar";
import Infosw from "./Infos";

const InfoManagement = ()=>{
    return(
        <Infosw>
            <div className={"navigationBar"}>
                <NavigationBar/>
            </div>
            <div className={"managementPage"}>
                <ManagementPage/>
            </div>
        </Infosw>
    )
}

export default InfoManagement;