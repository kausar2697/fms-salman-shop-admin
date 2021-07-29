import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, Row, Col } from "react-bootstrap";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.sidebar ? (
        <Container fluid>
          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col md={10} style={{ marginLeft: "auto"}}>
              {props.children}
            </Col>
          </Row>
        </Container>
      ) : (
        props.children
      )}
    </>
  );
};

export default Layout;
