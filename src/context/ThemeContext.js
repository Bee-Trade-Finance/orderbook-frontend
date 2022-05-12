import React from 'react';

const ThemeContext = React.createContext(localStorage.getItem('theme') || 'dark');

const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export { ThemeProvider, ThemeConsumer };
