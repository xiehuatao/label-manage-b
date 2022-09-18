import React from 'react';
import {BrowserRouter, Switch} from "react-router-dom";

import 'antd/dist/antd.min.css';

import Management from "./components/information_management_function_page";



function App() {

  return (
    <BrowserRouter>
      <Switch>
        {/*<Route path='/' component={Login} />*/}
        {/*  <Classify/>*/}
          <Management/>
        {/*  <Classification/>*/}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
