import React from 'react';
import { IconButton, Tooltip, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from './store/appsettings/slice';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  
  return (
    <Tooltip title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
      <IconButton
        color="inherit"
        onClick={() => dispatch(toggleTheme())}
        aria-label="toggle theme"
        edge="end"
      >
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;