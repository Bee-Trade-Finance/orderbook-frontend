import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Index from './pages';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.body.className = theme;
  }, [theme])
  
    return (
      <>
        <BrowserRouter>
          <Route component={ScrollToTop} />
          <ThemeProvider
            value={{
              data: {theme: theme},
              update: () => {
                theme === 'dark'? localStorage.setItem('theme', 'light') : localStorage.setItem('theme', 'dark');
                setTheme(theme === 'dark'? 'light' : 'dark');

              },
            }}
          >
            <Index />
          </ThemeProvider>
        </BrowserRouter>
      </>
    );
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App;
