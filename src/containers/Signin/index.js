import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/Input";

const Signin = () => {
  return (
    <div>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                Label="Email Address"
                placeholder="Email Address"
                type="email"
                value=""
                // onChange={() => {}}
                required={true}
              />

              <Input
                Label="Password"
                placeholder="Password"
                type="password"
                value=""
                // onChange={() => {}}
                required={true}
              />
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signin;
