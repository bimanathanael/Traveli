import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import PaginationFactory from "react-bootstrap-table2-paginator";
import { Button, Modal, Form, Container } from "react-bootstrap";
import { MdAdd } from "react-icons/md";
import { addAdmin, deleteAdmin } from "../store/actions/userAction";
import Swal from "sweetalert2";
import { BsFillTrashFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const TableAdmin = ({ data }) => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const deleteAdminButton = (idAdmin) => {
    Swal.fire({
      title: "Are you sure want to delete this account?",
      showDenyButton: true,
      confirmButtonText: `Delete`,
      denyButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteAdmin(idAdmin));
        Swal.fire("Success Delete!", "", "success");
      }
    });
  };
  const registerHandler = (e) => {
    e.preventDefault();
    if (!username) {
      Swal.fire({ icon: "error", text: "username cannot empty!" });
    } else if (!password) {
      Swal.fire({ icon: "error", text: "password cannot empty!" });
    } else if (!confirmPassword) {
      Swal.fire({ icon: "error", text: "confirm password cannot empty!" });
    } else if (username.length < 6) {
      Swal.fire({ icon: "error", text: "username at least 6 characters!" });
    } else if (password.length < 8) {
      Swal.fire({ icon: "error", text: "password at least 8 characters!" });
    } else if (password !== confirmPassword) {
      Swal.fire({ icon: "error", text: "password don't match!" });
    } else {
      const newUser = {
        username,
        password,
      };

      dispatch(
        addAdmin(
          newUser,
          history,
          setShow,
          setUsername,
          setPassword,
          setConfirmPassword
        )
      );
    }
  };
  const buttonFormatter = (cell, dataAdm, row) => {
    return (
      <Button
        variant="danger"
        onClick={() => deleteAdminButton(dataAdm.username)}
      >
        <BsFillTrashFill />
      </Button>
    );
  };
  const columns = [
    {
      dataField: "username",
      text: "Username",
      headerStyle: {
        width: "200px",
        backgroundColor: "#007996",
        color: "white",
      },
    },
    {
      dataField: "action",
      text: "Action",
      formatter: buttonFormatter,
      style: { width: "100px" },
      headerStyle: {
        width: "100px",
        backgroundColor: "#007996",
        color: "white",
      },
    },
  ];

  return (
    <div>
      <div>
        <div style={{ textAlign: "center" }}>
          <Button variant="success" onClick={handleShow}>
            <MdAdd /> Admin
          </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={(e) => registerHandler(e)}>
            <Modal.Header
              closeButton
              style={{ backgroundColor: "#007996", color: "white" }}
            >
              <Modal.Title>Form Add Admin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={(e) => usernameHandler(e)}
                  type="text"
                  placeholder="Enter username"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => passwordHandler(e)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  onChange={(e) => confirmPasswordHandler(e)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Add
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Cancel
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
      <div style={{ textAlign: "center" }}>
        <Container style={{ marginTop: "20px", width: "700px" }}>
          <BootstrapTable
            striped
            bordered
            hover
            keyField="username"
            data={data}
            columns={columns}
            pagination={PaginationFactory()}
          ></BootstrapTable>
        </Container>
      </div>
    </div>
  );
};

export default TableAdmin;
