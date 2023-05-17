import React, { useEffect, useRef, useState } from "react";
import "./HomePage.styles.css";
import SignUpForm from "./components/SignUpForm.jsx";
import SignInForm from "./components/SignInForm.jsx";
import AuthOverlay from "./components/AuthOverlay.jsx";
import {Button, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";

HomePage.propTypes = {};

function HomePage(props) {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("1");

  const handleSignUpBtn = (e) => {
    containerRef.current.classList.add("right-panel-active");
  };

  const handleSignInBtn = (e) => {
    containerRef.current.classList.remove("right-panel-active");
  };


  return (
    <>
      <div className="container-wrapper">
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
      </div>
      <div className="container-mobile">
        <Nav tabs>
          <NavItem>
            <NavLink
                className={activeTab === "1" ? "active" : ""}
                onClick={() => setActiveTab("1")}
            >
              Sgin up
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
                className={activeTab === "2" ? "active" : ""}
                onClick={() => setActiveTab("2")}
            >
              Sign in
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className='container-mobile-inner'>
              <SignUpForm />
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className='container-mobile-inner'>
              <SignInForm />
            </div>
          </TabPane>
        </TabContent>
      </div>
    </>
  );
}

export default HomePage;
