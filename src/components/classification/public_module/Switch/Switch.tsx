
import { Switch } from 'antd';
import "antd/dist/antd.css"
import React from 'react';

const My_switch: React.FC = () => (
    <>
        <Switch checkedChildren="启用" unCheckedChildren="禁用" defaultChecked />
    </>
);

export default My_switch;