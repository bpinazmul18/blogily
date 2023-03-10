import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import { comments } from '../services/comments'
import { CommentsInitialStateProps } from '../models/Comments'
import { RootState } from './configureStore'

// First, create the thunk
export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (_, thunkAPI) => {
    try {
      const response = await comments()
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

// Initial state
const initialState: CommentsInitialStateProps = {
  loading: true,
  list: [],
  lastFetch: 0,
  error: null,
}

const slice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchComments.pending, (comments) => {
      comments.loading = true
    })

    builder.addCase(fetchComments.fulfilled, (comments, action) => {
      comments.loading = false
      comments.list.push(...action.payload)
    })

    builder.addCase(fetchComments.rejected, (comments, action) => {
      comments.loading = false
      comments.error = action.payload
    })
  },
})

// Selector
const commentsSelectors = (state: RootState) => state.entities.comments.list

export const getComments = (postId: number) =>
  createSelector(commentsSelectors, (comments) =>
    comments.filter((comment) => comment.postId === postId)
  )

export default slice.reducer
