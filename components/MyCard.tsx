import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import { MyCardProps } from '../models/MyCard'
import Link from 'next/link'
import UserHeader from './HOC/UserHeader'
import UserComments from './HOC/UserComments'
import { useSelector } from 'react-redux'
import { RootState } from '../store/configureStore'
import { getComments } from '../store/comments'

const MyCard = ({ id, userId, title, description, postId }: MyCardProps) => {
  const comments = useSelector((state: RootState) => getComments(postId)(state))

  return (
    <Card>
      <Link href={`/posts/${id}`} style={{ fontSize: '18px' }}>
        {title}
      </Link>
      <p>{description}</p>

      <div className="author" style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar icon={<UserOutlined />} />
        <UserHeader userId={userId} />
        <UserComments itemsCount={comments.length} />
      </div>
    </Card>
  )
}

export default MyCard
