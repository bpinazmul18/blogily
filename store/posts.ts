import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { posts } from '../services/posts'
import { PostInitialStateProps, Post } from '../models/Post'

// First, create the thunk
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, thunkAPI) => {
    const response = await posts()
    return response.data
  }
)

// Initial state
const initialState: PostInitialStateProps = {
  loading: false,
  list: [],
  lastFetch: 0,
}

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPosts.pending, (posts) => {
      posts.loading = true
    })

    builder.addCase(fetchPosts.fulfilled, (posts, action) => {
      posts.loading = false
      posts.list.push(action.payload)
    })
  },
})

export default slice.reducer
