import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './store/counterSlice';
import usersReducer from './store/usersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
