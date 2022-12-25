import { Drawer } from 'antd'
import React, { useState } from 'react'
import { MenuOutlined } from '@ant-design/icons'
import AppMenu from './AppMenu'

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }
  return (
    <>
      <div className="hum-menu-icon-wrapper">
        <MenuOutlined onClick={showDrawer} />
      </div>
      <div className="main-menu">
        <AppMenu />
      </div>
      <Drawer placement="left" onClose={onClose} open={open}>
        <AppMenu />
      </Drawer>
    </>
  )
}

export default Navbar
