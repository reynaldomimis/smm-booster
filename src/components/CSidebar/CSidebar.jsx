import React, { useState } from "react";
import { SidebarLabel } from "./SidebarLabel/SidebarLabel";
import { sidebarList } from "../../context/ListData";
import CButton from "../CButton/CButton";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styled.scss";

const CSidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { logOut } = UserAuth();

  const navigate = useNavigate();

  const onHandleSignOut = async () => {
    navigate("/");
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Log Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onHandleSignOut}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
      <aside>
        {sidebarList.length > 0 &&
          sidebarList.map((item, i) => {
            return (
              <Link className="sidebtn" key={i} to={item.path}>
                <SidebarLabel label={item.label} icon={item.icon} />
              </Link>
            );
          })}
        <div className="logout">
          <CButton label="Logout" onClick={handleShow} />
        </div>
      </aside>
    </>
  );
};

export default CSidebar;
