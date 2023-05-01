import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Form, FormFeedback,
  FormGroup, FormText, Input, Label,
  Row
} from 'reactstrap';


function App() {
  const [count, setCount] = useState(0);

  return (
      <Container fluid>
        <Container className="bg-light">
          Sign Up form code goes here
          <Form>
            <FormGroup>
              <Label for="exampleEmail">
                Input without validation
              </Label>
              <Input />
              <FormFeedback>
                You will not be able to see this
              </FormFeedback>
              <FormText>
                Example help text that remains unchanged.
              </FormText>
            </FormGroup>
          </Form>
        </Container>
      </Container>
  );
}

export default App;
