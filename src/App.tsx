import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./pages/Log/Login";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Classify from "./pages/LabelManage/Classify";
import 'antd/dist/antd.min.css';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        {/*<Route path='/' component={Login} />*/}
          <Classify/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
