import React from 'react';
import {Button, DatePicker, version} from 'antd';
const Analytics = () => {
    return (
        <div>
            <h1>antd version : {version}</h1>
            <DatePicker />
            <Button type="primary">
                Primary Button
            </Button>
        </div>
    )
}

export default Analytics;