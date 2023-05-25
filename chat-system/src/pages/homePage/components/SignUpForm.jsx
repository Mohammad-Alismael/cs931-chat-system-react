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

    if (user.password !== user.confirmPassword) {
        toast("password and confirm password don't match");
        return
    }

    const submittedObject = user;
    delete submittedObject.confirmPassword;
    handleSignUp(submittedObject).then((data)=>{
        setUser({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
            description: "",
        })
        toast(data.message)
    }).catch((error)=>{
        toast.error(error.message)
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
        value={user.displayName}
        name="displayName"
        type="text"
        placeholder="Display Name"
      />
      <input
        onChange={handleValue}
        value={user.email}
        name="email"
        type="email"
        placeholder="Email"
      />
      <input
        onChange={handleValue}
        value={user.password}
        name="password"
        type="password"
        placeholder="Password"
      />
      <input
        onChange={handleValue}
        value={user.confirmPassword}
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <input
        onChange={handleValue}
        value={user.description}
        name="description"
        type="textarea"
        placeholder="Tell Us More About Yourself"
      />
      <button onClick={handleSubmit}>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
