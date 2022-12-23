import { combineReducers } from 'redux'
import postsReducer from './posts'
import userReducer from './users'
import commentsReducer from './comments'

export default combineReducers({
  posts: postsReducer,
  users: userReducer,
  comments: commentsReducer
})
