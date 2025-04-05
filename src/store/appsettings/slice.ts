import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppSettingsState {
    theme: ThemeState;
}

export interface ThemeState {
    mode: 'light' | 'dark';
  }

  const initialState: AppSettingsState = {
    theme: {
      mode: 'light',  // Default theme mode
    },
  };

// A slice for managing a simple counter state
const appSettingsSlice = createSlice({
  name: 'app-settings',  // Unique slice name
  initialState,
  reducers: {      // Function to toggle the theme mode
    toggleTheme: (state) => {
      state.theme.mode = state.theme.mode === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme.mode = action.payload;
  },
}
});

// Export actions for use in React components
export const { toggleTheme, setTheme } = appSettingsSlice.actions;

// Export the reducer to configure the Redux store
export default appSettingsSlice.reducer;
