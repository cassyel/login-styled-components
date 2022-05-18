import React from 'react';
import './App.css';
import LoginForm from './components/login-form/login-form';
import Switch from './components/themeSwitcher/Switcher';

function App() {
  return (
    <div className="App">
      <Switch />
      <LoginForm />
    </div>
  );
}

export default App;
