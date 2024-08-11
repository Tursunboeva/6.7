import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import '../login/Login.css'

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleUserLogin = (e) => {
    e.preventDefault();

    axios.post("https://fakestoreapi.com/auth/login", { username: name, password }) 
      .then(response => {
        if(response.status === 200){
          alert ('User created successfly')
          navigate('/Home')
        }
      })
      .catch(error => console.error('Error logging in:', error));
  };

  return (
    <div className="login-container">
      <form onSubmit={handleUserLogin}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
