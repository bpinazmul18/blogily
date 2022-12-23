import React from 'react';
import { connect } from 'react-redux';
import { Layout, Row, Col, Typography } from 'antd';
import { RootState } from '../store/configureStore';
import { getPosts } from '../store/posts';
import { MyContentProps } from '../models/MyContent';
import Card from './MyCard';

const { Content} = Layout
const { Title } = Typography;

const MyContent = ({ loading, blogs }: MyContentProps) => {

    if (loading) {
        return <div>Loading...</div>
    }

    const renderedBlogs = blogs.map((blog) => {
        return (
            <Col span={8} key={blog.id}>
                <div className="card-wrapper">
                    <Card id={blog.id} userId={blog.userId} title={blog.title} description={blog.body}/>
                </div>
            </Col>
        )
    })

    return ( 
        <Content className="main-content">
            <div className="container">
                <Row>
                    <Col>
                    <Title>Blog</Title>
                    </Col>
                </Row>
                <hr />
                <Row gutter={32}>
                    { renderedBlogs}
                </Row>
            </div>
        </Content>
     );
}

const mapStateToProps = (state: RootState) => {
    return { 
        loading: state.entities.posts.loading, 
        blogs: getPosts(state)
    }
}
 
export default connect(mapStateToProps)(MyContent);