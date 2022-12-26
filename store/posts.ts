import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { posts } from '../services/posts'
import { PostInitialStateProps } from '../models/Post'
import { RootState } from './configureStore'

// First, create the thunk
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, thunkAPI) => {
    try {
      const response = await posts()
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

// Initial state
const initialState: PostInitialStateProps = {
  loading: true,
  list: [],
  lastFetch: 0,
  error: null,
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
      posts.list.push(...action.payload)
    })

    builder.addCase(fetchPosts.rejected, (comments, action) => {
      comments.loading = false
      comments.error = action.payload
    })
  },
})

// Selector
const postsSelectors = (state: RootState) => state.entities.posts.list

export const getPosts = createSelector(postsSelectors, (posts) => posts)

export default slice.reducer
