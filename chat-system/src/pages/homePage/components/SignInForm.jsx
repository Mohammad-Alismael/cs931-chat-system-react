import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {handleLogin} from "../../../lib/user.js";
import {useNavigate} from "react-router-dom";

const SignInForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
      e.preventDefault()
      handleLogin(user).then(()=>{
          setUser({
              email: "",
              password: "",
          })
          navigate('/chat')
      }).catch((error)=>{
          toast.error(error.message);
      })
  };

  const handleValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <h1>Sign in</h1>
      <span>or use your account</span>
      <input
        onChange={handleValue}
        name="email"
        type="email"
        placeholder="Email"
      />
      <input
        onChange={handleValue}
        name="password"
        type="password"
        placeholder="Password"
      />
      <a href="#">Forgot your password?</a>
      <button onClick={handleSubmit}>Sign In</button>
    </form>
  );
};

export default SignInForm;
