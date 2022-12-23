import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../../store/comments'
import { RootState } from '../../store/configureStore'

const UserComments = (props: any) => {

  useEffect(() => {
    props.fetchComments(props.userId)
  }, [])

  return <div>44 comments</div>

}

const mapStateToProps = (state: RootState, ownProps: any) => {
    // console.log(state)
    return {
    //   comments: state.entities.comments.list.find((comment) => user.id === ownProps.userId),
    }
  }

export default connect(mapStateToProps, { fetchComments })(UserComments)