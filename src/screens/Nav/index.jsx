import React, { useState } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import {Menu, Layout} from 'antd';

const Nav = () => {

    const [current, setCurrent] = useState('analytics');
    const handleClick = e => {
        console.log('[Click] : ', e);
        setCurrent(prevCurrent => e.key);
    }

    return(
        <Layout.Header>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.SubMenu key="profile-submenu" title="Profile">
                    <Menu.Item key="student">
                        Student
                    </Menu.Item>
                    <Menu.Item key="government">Government</Menu.Item>
                    <Menu.Item key="ed-inst">Educational Institute</Menu.Item>
                    <Menu.Item key="job-seeker">Job Seeker</Menu.Item>
                    <Menu.Item key="other">Other</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="analytics">
                    <Link to="/analytics">
                        Analytics
                    </Link>
                </Menu.Item>
                <Menu.Item key="ideas">Ideas</Menu.Item>
                <Menu.Item key="how-it-works">How It Works</Menu.Item>
                <Menu.Item key="team">
                    <Link to="/team">
                    Team
                    </Link>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    )
}

export default Nav;