import { Layout, Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const Home = () => {
    return (
        <Layout className={styles.hero}>
            <Layout.Content>
                <h1>Welcome to Awsar</h1>
                <h2>We provide one stop solution for all your job needs</h2>
                <Button type="primary" size="large">
                    <Link to="/analytics">
                        GO
                    </Link>
                </Button>
            </Layout.Content>
        </Layout>
    )
}

export default Home;