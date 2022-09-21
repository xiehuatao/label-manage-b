import React from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import 'antd/dist/antd.min.css';
import Classify from './pages/LabelManage/Classify';
import NavigationBar from "./components/NavigationBar/NavigationBar";



function App() {

  return (
    <BrowserRouter>

        <NavigationBar/>
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
