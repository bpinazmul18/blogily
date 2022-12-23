export interface Post {
  userId: string
  id: number
  title: string
  body: string
}

export interface PostInitialStateProps {
  loading: boolean
  list: Post[]
  lastFetch: number
}
