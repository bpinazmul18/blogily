import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../store/configureStore'
import { fetchUser } from '../../store/users'

const UserHeader = (props: any) => {
  useEffect(() => {
    props.fetchUser(props.userId)
  }, [])

  if (!props.user) return <div>NO User found!</div>

  return <div className="header" style={{ marginBottom: '0', marginLeft: '10px'}}>{props.user.name}</div>
}

const mapStateToProps = (state: RootState, ownProps: any) => {
  return {
    user: state.entities.users.list.find((user) => user.id === ownProps.userId),
  }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader)