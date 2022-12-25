export interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface CommentsInitialStateProps {
  loading: boolean
  list: Comment[]
  lastFetch: number
}
