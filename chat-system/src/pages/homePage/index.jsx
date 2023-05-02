import React, { useRef } from "react";
import "./HomePage.styles.css";
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

  return (
    <div ref={containerRef} className="container" id="container">
      <div className="form-container sign-up-container">
        <SignUpForm />
      </div>

      <div className="form-container sign-in-container">
        <SignInForm />
      </div>
      <AuthOverlay
        handleSignInBtn={handleSignInBtn}
        handleSignUpBtn={handleSignUpBtn}
      />
    </div>
  );
}

export default HomePage;
