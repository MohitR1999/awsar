import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import Pranav from '../../assets/img/pranav.jpeg';
import Mohit from '../../assets/img/mohit.jpeg';

const Team = () => {
    /**
     * We are using AntDesign's 24 column grid system here, which is similar to bootstrap's 12
     * column layout
     */
    return (
        <Row>
            <Col span={24}>
                <Typography.Title style={{ textAlign: 'center', marginTop: '3%', marginBottom: '3%' }}>
                    Our Team
                </Typography.Title>
            </Col>
            <Row>
                <Col lg={6} md={12} sm={24} style={{ padding: '2%' }}>
                    <Card
                        hoverable
                        style={{ width: '95%' }}
                        cover={<img alt="example" src={Pranav} />}
                    >
                        <Card.Meta title="Ishika Jain" description="Machine Learning Developer" />
                    </Card>
                </Col>

                <Col lg={6} md={12} sm={24} style={{ padding: '2%' }}>
                    <Card
                        hoverable
                        style={{ width: '95%' }}
                        cover={<img alt="example" src={Pranav} />}
                    >
                        <Card.Meta title="Kartik Pawar" description="Data Acquisition Expert" />
                    </Card>
                </Col>

                <Col lg={6} md={12} sm={24} style={{ padding: '2%' }}>
                    <Card
                        hoverable
                        style={{ width: '95%' }}
                        cover={<img alt="example" src={Pranav} />}
                    >
                        <Card.Meta title="Pranav Sharma" description="Back-end Developer" />
                    </Card>
                </Col>

                <Col lg={6} md={12} sm={24} style={{ padding: '2%' }}>
                    <Card
                        hoverable
                        style={{ width: '95%' }}
                        cover={<img alt="example" src={Mohit} />}
                    >
                        <Card.Meta title="Mohit Ranjan" description="Front-end Developer" />
                    </Card>
                </Col>
            </Row>
        </Row>

    )
}

export default Team;

/**
 * Created by:
 __  __       _     _ _   
|  \/  | ___ | |__ (_) |_ 
| |\/| |/ _ \| '_ \| | __|
| |  | | (_) | | | | | |_ 
|_|  |_|\___/|_| |_|_|\__|
 */