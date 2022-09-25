import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'antd/dist/antd.min.css';
import Login from "./pages/Log/Login";
import Main from "./pages/main/main";


function App() {

  return (
    <BrowserRouter>

        {/*<NavigationBar/>*/}
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path={'/main'} component={Main}/>
        {/*  <Classify/>*/}
        {/*    <ClassifyFunction/>*/}
        {/*    <CheckButton/>*/}
        {/*  <Management/>*/}
        {/*  <Classification/>*/}
        {/*  <ManagementPage/>*/}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
