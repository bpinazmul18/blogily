import { Menu } from 'antd'
import React from 'react'
import { AppMenuProps } from '../models/AppMenu'

const AppMenu: React.FC = ({ isInline }: AppMenuProps) => {
  return (
    <Menu
      mode={isInline ? 'inline' : 'horizontal'}
      items={[
        {
          label: 'Home',
          key: 'home',
        },
        {
          label: 'Posts',
          key: 'posts',
        },
      ]}
    />
  )
}

export default AppMenu
