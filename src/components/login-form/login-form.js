import React from 'react';
import './style.css';

function LoginForm() {
  return (
    <main className="container-login">
      <h1 className="title">Sign in</h1>
      <p>Sign in and start managing your candidates!</p>
      <div className="inputs">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
      </div>
      <div className="options">
        <label htmlFor="remember">
          <input type="checkbox" name="remember" id="remember" />
          Remember me
        </label>
        <a href="#contact"> Forgot  password?</a>
      </div>
      <div className="inputs">
        <button type="button"> LOGIN </button>
      </div>
    </main>
  );
}

export default LoginForm;
