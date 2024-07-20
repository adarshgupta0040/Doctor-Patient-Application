import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import email_icon from '../Assets/Icons/mail.png';
import password_icon from '../Assets/Icons/password.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      navigate('/home');
    } else {
      console.error('Login failed');
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text" style={{ textAlign: "center" }}>Doctor's Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className="forget-password">Lost Password?<span onClick={() => { navigate("/") }}>Click Here!</span></div>
      <div className="submit-container">
        <div className="submit" onClick={handleLogin}>Login</div>
      </div>
    </div>
  );
};

export default Login;
