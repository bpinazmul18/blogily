import { AppDispatch } from '../store/configureStore'
import { Post } from './Post'

export interface MyContentProps {
  blogs: Post[]
  loading: boolean
}
