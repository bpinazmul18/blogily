import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';

const { Content} = Layout
const { Title } = Typography;

const MyContent = () => {
    return ( 
        <Content className="main-content">
            <div className="container">
                <Row>
                    <Col>
                    <Title>BLog</Title>
                    </Col>
                </Row>
                <hr />
                <Row>
                </Row>
            </div>
        </Content>
     );
}
 
export default MyContent;