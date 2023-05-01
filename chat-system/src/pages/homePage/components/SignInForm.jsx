import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const SignInForm = () => {
  return (
    <Form>
      <h1>Sign in</h1>
      <span>or use your account</span>
      <FormGroup>
        <Input type="email" name="email" id="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </FormGroup>
      <a href="#">Forgot your password?</a>
      <Button>Sign In</Button>
    </Form>
  );
};

export default SignInForm;
