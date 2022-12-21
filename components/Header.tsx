import { Col, Row } from 'antd'
import React from 'react'
import Navbar from './Navbar'

const Header: React.FC = () => {
  return (
    <header>
      <Row justify="center" align="middle">
        <Col xs={20} xxl={16}>
          <Navbar />
        </Col>
      </Row>
    </header>
  )
}

export default Header
