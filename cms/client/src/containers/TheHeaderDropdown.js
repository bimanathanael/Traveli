import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAdmin } from "../store/actions/userAction";
import Swal from "sweetalert2";
import { jwtVerifyUsername } from "../helpers/jsonwebtoken";
import { useHistory } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import "./theHeaderDropDown.css";

const TheHeaderDropdown = () => {
  const [showModal, setShowModal] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const history = useHistory();

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  const oldPasswordHandler = (e) => {
    setOldPassword(e.target.value);
  };

  const newPasswordHandler = (e) => {
    setNewPassword(e.target.value);
  };

  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const changePasswordHandler = (e) => {
    e.preventDefault();

    if (!oldPassword) {
      Swal.fire({ icon: "error", text: "Old Password cannot empty!" });
    } else if (!newPassword) {
      Swal.fire({ icon: "error", text: "New Password cannot empty!" });
    } else if (!confirmPassword) {
      Swal.fire({ icon: "error", text: "confirm password cannot empty!" });
    } else if (newPassword.length < 8) {
      Swal.fire({ icon: "error", text: "new password at least 8 characters!" });
    } else if (newPassword !== confirmPassword) {
      Swal.fire({ icon: "error", text: "password don't match!" });
    } else {
      const newUser = {
        username: jwtVerifyUsername(localStorage.getItem("username")),
        oldPassword,
        newPassword,
      };
      dispatch(
        updateAdmin(
          newUser,
          history,
          setShowModal,
          setOldPassword,
          setNewPassword,
          setConfirmPassword
        )
      );
    }
  };
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <div>
      <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
        <CDropdownToggle className="c-header-nav-link" caret={false}>
          <div className="c-avatar">
            {localStorage.getItem("username") &&
              jwtVerifyUsername(localStorage.getItem("username"))}
          </div>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownItem onClick={handleShowModal}>
            <CIcon name="cil-user" className="mfe-2" />
            Edit Password
          </CDropdownItem>
          <CDropdownItem divider />
          <CDropdownItem onClick={() => logout()}>
            <CIcon name="cil-account-logout" className="mfe-2" />
            Logout
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
      <Modal
        className="modal-container"
        show={showModal}
        onHide={handleCloseModal}
      >
        <Form onSubmit={(e) => changePasswordHandler(e)}>
          <Modal.Header closeButton className="modal-header">
            <Modal.Title>Form Update Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Old Password</Form.Label>
              <Form.Control
                onChange={(e) => oldPasswordHandler(e)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                onChange={(e) => newPasswordHandler(e)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Re-Type Password</Form.Label>
              <Form.Control
                onChange={(e) => confirmPasswordHandler(e)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit">
              Update
            </Button>
            <Button variant="danger" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default TheHeaderDropdown;
