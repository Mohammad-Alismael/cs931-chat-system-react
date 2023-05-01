import {Button} from "reactstrap";

const AuthOverlay = ({ handleSignInBtn, handleSignUpBtn }) => {
    return (
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <Button onClick={handleSignInBtn} className="ghost" id="signIn">
                        Sign In
                    </Button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <Button onClick={handleSignUpBtn} className="ghost" id="signUp">
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AuthOverlay;