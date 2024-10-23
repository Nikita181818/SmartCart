import './CSS/OnlyLogin.css'; 
import React, { useState } from 'react'; 

const LoginSignup = () => {   
  const [state, setState] = useState("Login");   
  const [formData, setFormData] = useState({ username: '', password: "", email: "" });    

  const changeHandler = (e) => {     
    setFormData({ ...formData, [e.target.name]: e.target.value });   
  };    

  const login = async (e) => {     
    e.preventDefault(); 
    console.log("login clicked", formData); 

    try {       
      const response = await fetch('http://localhost:4000/login', {         
        method: 'POST',         
        headers: {           
          'Accept': 'application/json',           
          'Content-Type': 'application/json',         
        },         
        body: JSON.stringify(formData),       
      });       

      const responseData = await response.json(); 
      console.log("Response Data:", responseData); 

      if (response.ok && responseData.success) {         
        localStorage.setItem('auth-token', responseData.token);         
        window.location.replace('/');       
      } else {         
        alert(responseData.message || 'Login failed');       
      }     
    } catch (error) {       
      console.error('Error during login:', error);     
    }   
  };    

  const signup = async (e) => {     
    e.preventDefault(); 
    console.log("signup clicked", formData); 

    try {       
      const response = await fetch('http://localhost:4000/signup', {         
        method: 'POST',         
        headers: {           
          'Accept': 'application/json',           
          'Content-Type': 'application/json',         
        },         
        body: JSON.stringify(formData),       
      });       

      const responseData = await response.json(); 
      console.log("Response Data:", responseData); 

      if (response.ok && responseData.success) {         
        localStorage.setItem('auth-token', responseData.token);         
        window.location.replace('/');       
      } else {         
        alert(responseData.message || 'Signup failed');       
      }     
    } catch (error) {       
      console.error('Error during signup:', error);     
    }   
  };    

  return (     
    <div className="loginsignup">       
      <div className="loginsignup-container">         
        <h1>{state}</h1>         
        <form className="loginsignup-form" onSubmit={state === "Login" ? login : signup}>           
          {state === 'Sign Up' && (             
            <input               
              value={formData.username}               
              onChange={changeHandler}               
              type="text"               
              name="username"               
              placeholder="Username"             
            />           
          )}           
          <input             
            name='email'             
            value={formData.email}             
            onChange={changeHandler}             
            type="email"             
            placeholder="Email"           
          />           
          <input             
            name="password"             
            value={formData.password}             
            onChange={changeHandler}             
            type="password"             
            placeholder="Password"           
          />           
          <button type="submit">Continue</button>         
        </form>         
        {state === "Sign Up" ? (           
          <p>             
            Already have an account? <span className='span1' onClick={() => setState("Login")}>Login here</span>           
          </p>         
        ) : (           
          <p>             
            Create an account? <span className='span2' onClick={() => setState("Sign Up")}> Sign Up</span>           
          </p>         
        )}       
      </div>     
    </div>   
  ); 
};  

export default LoginSignup;
