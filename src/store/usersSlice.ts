import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
    id: number
    name: string
    email: string
  }

  interface UsersState {
    users: User[]
    loading: boolean
    error: string | null
  }

  const initialState: UsersState = {
    users: [],
    loading: false,
    error: null,
  }

  // 🔄 Async thunk
export const fetchUsers = createAsyncThunk<User[]>('users/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
  })

// A slice for managing a simple counter state
const usersSlice = createSlice({
  name: 'users',  // Unique slice name
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
    .addCase(fetchUsers.pending, (state) => {
      state.loading = true
      state.error = null
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Something went wrong'
    })
  },
});

// Export actions for use in React components
export const {  } = usersSlice.actions;

// Export the reducer to configure the Redux store
export default usersSlice.reducer;
