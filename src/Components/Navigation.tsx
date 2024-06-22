import menu from "../assets/icon-menu.svg";
import "./Navigation.scss";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import { NavDropList } from "./NavDropList";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav>
      <h1>snap</h1>
      <img src={menu} onClick={handleShow}   className="d-lg-none"/>
      <Offcanvas show={show} onHide={handleClose} placement="end" >
        <Offcanvas.Header closeButton  />
        <Offcanvas.Body  >
          <NavDropList />
          <div className="navlinks mt-4">
            <div className="navButtons">
              <button>Login</button>
              <button>Register</button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </nav>
  );
};
