import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './store/counterSlice';
import usersReducer from './store/usersSlice';
import appSettingsReducer from './store/appsettings/slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    appSettings: appSettingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
