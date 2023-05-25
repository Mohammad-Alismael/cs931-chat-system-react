import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import React, {useContext, useState} from "react";
import { toast } from "react-toastify";
import {handleLogin} from "../../../lib/user.js";
import {useNavigate} from "react-router-dom";
import GlobalContext from "../../../utils/context/globalContext.jsx";

const SignInForm = () => {
    const {setUser} = useContext(GlobalContext);
  const [user_, setUser_] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
      e.preventDefault()
      handleLogin(user_).then((data)=>{
          setUser({uid: data, ...user_ })
          setUser_({
              email: "",
              password: "",
          })
          navigate('/chat')
      }).catch((error)=>{
          toast.error(error.message);
      })
  };

  const handleValue = (e) => {
    setUser_({ ...user_, [e.target.name]: e.target.value });
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
