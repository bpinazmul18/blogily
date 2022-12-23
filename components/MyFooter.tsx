import React from 'react'
import { Row, Col } from 'antd'

const MyFooter: React.FC = () => {
  return (
    <footer>
      <div className='container'>
        <footer id="footer" className="dark">
          <div className="footer-wrap">
            <Row>
              <Col>
                <div className="footer-center">
                  <h2>Blogily| A simple blog web app.</h2>
                </div>
              </Col>
            </Row>
          </div>
        </footer>
      </div>
    </footer>
  )
}

export default MyFooter
