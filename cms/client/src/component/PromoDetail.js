import React, { useState, useEffect } from "react";
import "./PromoDetail.css";
import { Button, Modal, Form } from "react-bootstrap";
import { BsTrashFill } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";
import {
  updatePromo,
  deletePromo,
  uploadImages,
} from "../store/actions/promoAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { app } from "../base";
import parserText from "html-react-parser";
const PromoDetail = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [imageUrl, setImageUrl] = useState(data.image_url);
  const [content, setContent] = useState(data.content);
  const [imagePath, setImagePath] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {}, []);
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const imageHandler = (e) => {
    const file = e.target.files[0];
    setImagePath(file);
  };
  const contentHandler = (e) => {
    setContent(e.target.value);
  };
  const saveUpdate = (e) => {
    e.preventDefault();
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(imagePath.name);
    fileRef.put(imagePath).then(() => {
      console.log("upload file", imagePath.name);
    });
  };

  const deletingPromo = () => {
    Swal.fire({
      title: "Are you sure want to delete this promo?",
      showCancelButton: true,
      confirmButtonText: `Delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePromo(data.timeInNumber, history));
      }
    });
  };
  return (
    <div className="containers">
      <div className="button-container">
        <Button variant="info" className="button-item" onClick={handleShow}>
          <GrUpdate /> Update
        </Button>
        <Button variant="danger" onClick={(e) => deletingPromo()}>
          <BsTrashFill /> delete
        </Button>
      </div>
      <div>
        <Modal show={show} onHide={handleClose} size="lg">
          <Form onSubmit={(e) => saveUpdate(e)}>
            <Modal.Header closeButton>
              <Modal.Title>Update Promo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ex: Flash Sale"
                  defaultValue={data.title}
                  onChange={(e) => titleHandler(e)}
                />
              </Form.Group>

              <Form.Group>
                <label htmlFor="container-image">Images</label>
                <div className="container-image">
                  <div className="container-formImage">
                    <div className="wrapper">
                      <div className="image">
                        <img src={imageUrl} alt="" />
                      </div>
                      <div className="file-name">File name here</div>
                    </div>
                    <input
                      id="input"
                      accept="image/*"
                      type="file"
                      onChange={(e) => imageHandler(e)}
                    />
                    <div id="custom-btn">
                      <label htmlFor="input" id="text-custom-btn">
                        Change Image
                      </label>
                    </div>
                  </div>
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  defaultValue={data.content}
                  onChange={(e) => contentHandler(e)}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Cancel
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
      <div className="container-detail">
        <div className="image-div">
          <img src={data.image_url} className="image-detail" alt="detail" />
        </div>
        <div className="content-container">
          <div className="title-detail">
            <h1>{data.title}</h1>
          </div>
          <div className="content-detail">
            <p>{parserText(data.content)}</p>
          </div>
          <div className="time-detail">
            {/* <p>Created at: {data.time.split(" ").splice(1, 3).join(" ")}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoDetail;
