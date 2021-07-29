import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./header.css";
import logo from '../../assets/images/logo/1.png'

const Header = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"> */}
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
      {/* </Nav>
            <Nav>
              {!auth.authenticate ? (
                <Link className="nav-link" to="/signin">
                  Signin
                </Link>
              ) : (
                ""
              )}
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <h1>Admin Panel</h1>
          </div>
          <div className="topRight">
          {/* <span className="logo"><img src={logo} /></span> */}
            {/* <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="topAvatar"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
