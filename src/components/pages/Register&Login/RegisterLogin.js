
import React, { useState } from 'react';
import './RegisterLogin.css';



const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic with username and password
    console.log('Register:', username, password);
    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className='form-container'>
      <h2 id='register'>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};



const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic with username and password
    console.log('Login:', username, password);
    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className='form-container'>
      <h2 id='login'>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const RegisterAndLoginForm = () => {
  return (
    <div className='center-container'>
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default RegisterAndLoginForm;
