import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

// Beam logo
import logo from "../images/beam_logo.png";

// user guide pdf
import UserGuide from "../pdf/i580_User_Guide_V1-0_20190521_EN.pdf";

// Router
import { Link } from "react-router-dom";

export default function Navigationbar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  function homeToogle() {
    if (!collapsed) {
      toggleNavbar();
    }
  }

  return (
    <Navbar color="faded" light>
      <div style={{ display: "flex", width: "100%" }}>
        <NavbarBrand
          tag={Link}
          to="/"
          className="mr-auto"
          onClick={() => homeToogle()}
        >
          <img
            src={logo}
            width="20%"
            alt="logo"
            style={{ float: "left", height: "100%" }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={() => toggleNavbar()} className="mr-2" />
      </div>
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar style={{ textAlign: "center" }}>
          <NavItem>
            <NavLink
              href={UserGuide}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => toggleNavbar()}
              style={{ color: "#A67EB1" }}
            >
              User Guide
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/troubleshooting"
              onClick={() => toggleNavbar()}
              style={{ color: "#A67EB1" }}
            >
              Troubleshooting
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://southerntelecom.mycusthelp.com/webapp/_rs/(S(tirwoac5kqzksjqnelwu02wa))/SupportHome.aspx"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => toggleNavbar()}
              style={{ color: "#A67EB1" }}
            >
              Product Support
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/privacy"
              onClick={() => toggleNavbar()}
              style={{ color: "#A67EB1" }}
            >
              Privacy Statement
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
