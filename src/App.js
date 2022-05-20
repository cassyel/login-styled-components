import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import LoginForm from './components/login-form/login-form';
import Switch from './components/themeSwitcher/Switcher';
import GlobalStyle from './styles/globalStyle';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import { Container } from './styles/App';

function App() {
  document.title = 'Login System';
  const [currentTheme, setCurrentTheme] = useState(dark);

  const handleTheme = () => {
    if (currentTheme.title === 'dark') return setCurrentTheme(light);
    return setCurrentTheme(dark);
  };

  return (
    <ThemeProvider theme={ currentTheme }>
      <GlobalStyle />
      <Container>
        <Switch handleTheme={ handleTheme } />
        <LoginForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;
