import React, { useRef } from "react";
import "./HomePage.styles.css";
import {Container} from "reactstrap";
import SignUpForm from "./components/SignUpForm.jsx";
import SignInForm from "./components/SignInForm.jsx";
import AuthOverlay from "./components/AuthOverlay.jsx";

HomePage.propTypes = {};

function HomePage(props) {
  const containerRef = useRef(null);

  const handleSignUpBtn = (e) => {
    containerRef.current.classList.add("right-panel-active");
  };

  const handleSignInBtn = (e) => {
    containerRef.current.classList.remove("right-panel-active");
  };

  // return (
  //     <Container className="container" id="container" ref={containerRef}>
  //       <div className="form-container sign-up-container">
  //         <SignUpForm />
  //       </div>
  //       <div className="form-container sign-in-container">
  //         <SignInForm />
  //       </div>
  //       <AuthOverlay handleSignInBtn={handleSignInBtn} handleSignUpBtn={handleSignUpBtn} />
  //     </Container>
  // );

  return (
    <div ref={containerRef} className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <input type="textarea" placeholder="Tell Us More About Yourself" />
          <button>Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button onClick={handleSignInBtn} className="ghost" id="signIn">
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button onClick={handleSignUpBtn} className="ghost" id="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
