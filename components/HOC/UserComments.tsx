import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchComments, getComments } from '../../store/comments'
import { RootState } from '../../store/configureStore'

const UserComments = (props: any) => {
  
  return <div>{props.itemsCount} comments</div>

}

export default UserComments