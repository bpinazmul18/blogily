import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Content} = Layout

const MyContent = () => {
    return ( 
        <Content className="main-content">
            <div className="container">
                <Row>
                    <Col span={6}>col-6</Col>
                </Row>
            </div>
        </Content>
     );
}
 
export default MyContent;