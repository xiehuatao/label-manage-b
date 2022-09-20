import React from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import 'antd/dist/antd.min.css';
import Management from "./components/information_management_function_page";
import ManagementPage from "./components/information_management_page";
import Classify from './pages/LabelManage/Classify';



function App() {

  return (
    <BrowserRouter>
      <Switch>
        {/*<Route path='/' component={Login} />*/}
          <Classify/>
        {/*  <Management/>*/}
        {/*  <Classification/>*/}
        {/*  <ManagementPage/>*/}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
