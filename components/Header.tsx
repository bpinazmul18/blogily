import { Col, Row } from 'antd'
import React from 'react'
import Navbar from './Navbar'

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <Navbar />
      </div>
    </header>
  )
}

export default Header
