import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import user_icon from '../Assets/Icons/person.png';
import email_icon from '../Assets/Icons/mail.png';
import password_icon from '../Assets/Icons/password.png';
import specialty_icon from '../Assets/Icons/specialty.png';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialty, setSpecialty] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    const response = await fetch('http://localhost:8080/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, specialty })
    });
    if (response.ok) {
      navigate('/login');
    } else {
      console.error('Signup failed');
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text" style={{textAlign:"center"}}> Doctor's Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input">
          <img src={specialty_icon} alt="" height={30} />
          <input type="text" placeholder='Specialty' value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleSignup}>Sign Up</div>
      </div>
    </div>
  );
};

export default Signup;
