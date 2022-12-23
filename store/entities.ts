import { combineReducers } from 'redux'
import postsReducer from './posts'
import userReducer from './users'

export default combineReducers({
  posts: postsReducer,
  users: userReducer,
})
