import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const SignUpForm = () => {
  return (
    <Form>
      <h1>Create Account</h1>
      <span>or use your email for registration</span>
      <FormGroup>
        <Input type="text" name="name" id="name" placeholder="Name" />
      </FormGroup>
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
      <FormGroup>
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="textarea"
          name="textarea"
          id="textarea"
          placeholder="ell Us More About Yourself"
        />
      </FormGroup>
      <Button>Sign Up</Button>
    </Form>
  );
};

export default SignUpForm;
