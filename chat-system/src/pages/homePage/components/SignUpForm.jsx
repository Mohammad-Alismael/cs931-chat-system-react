import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import React, { useState } from "react";
import { handleLogin, handleSignUp } from "../../../lib/user.js";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    description: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      user.displayName === "" ||
      user.email === "" ||
      user.password === "" ||
      user.confirmPassword === ""
    ) {
      toast("Please fill in all required fields");
      return; // Exit the function if any field is empty
    }

    if (user.password !== user.confirmPassword)
      toast("password and confirm password don't match");
    const submittedObject = user;
    delete submittedObject.confirmPassword;
    handleSignUp(submittedObject).then(()=>{
        setUser({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
            description: "",
        })
    });
  };
  const handleValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <form>
      <h1>Create Account</h1>
      <span>or use your email for registration</span>
      <input
        onChange={handleValue}
        name="displayName"
        type="text"
        placeholder="Display Name"
      />
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
      <input
        onChange={handleValue}
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <input
        onChange={handleValue}
        name="description"
        type="textarea"
        placeholder="Tell Us More About Yourself"
      />
      <button onClick={handleSubmit}>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
