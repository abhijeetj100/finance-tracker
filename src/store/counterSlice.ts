import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// A slice for managing a simple counter state
const counterSlice = createSlice({
  name: 'counter',  // Unique slice name
  initialState: {   // Initial state of the counter
    value: 0
  },
  reducers: {       // Functions to update the state
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export actions for use in React components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer to configure the Redux store
export default counterSlice.reducer;
