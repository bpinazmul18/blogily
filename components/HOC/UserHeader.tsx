import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/configureStore'
import { fetchUser } from '../../store/users'

const UserHeader = (props: any) => {
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector((state: RootState) =>
    state.entities.users.list.find((user) => user.id === props.userId)
  )

  useEffect(() => {
    dispatch(fetchUser(props.userId))
  }, [])

  if (!user) return <div>NO User found!</div>

  return (
    <div
      className="header"
      style={{ marginBottom: '0', marginLeft: '10px', marginRight: '10px' }}
    >
      {user.name}
    </div>
  )
}

export default UserHeader
