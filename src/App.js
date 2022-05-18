import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import LoginForm from './components/login-form/login-form';
import Switch from './components/themeSwitcher/Switcher';
import GlobalStyle from './styles/globalStyle';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

function App() {
  const [currentTheme, setCurrentTheme] = useState(dark);

  const handleTheme = () => {
    if (currentTheme.title === 'dark') return setCurrentTheme(light);
    return setCurrentTheme(dark);
  };

  return (
    <ThemeProvider theme={ currentTheme }>
      <div className="App">
        <GlobalStyle />
        <Switch handleTheme={ handleTheme } />
        <LoginForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
