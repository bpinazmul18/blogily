import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import _ from 'lodash'
import { user } from '../services/users'
import { UsersInitialStateProps } from '../models/Users'

// First, create the thunk
export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  _.memoize(async (userId: number, thunkAPI) => {
    const response = await user(userId)
    return response.data
  })
)

// Initial state
const initialState: UsersInitialStateProps = {
  loading: true,
  list: [],
  lastFetch: 0,
}

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUser.pending, (users) => {
        users.loading = true
    })

    builder.addCase(fetchUser.fulfilled, (users, action) => {
        users.loading = false
      users.list.push(action.payload)
    })
  },
})

export default slice.reducer
