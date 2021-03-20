import React, { useState, useEffect } from "react";
import "./newsletterDetail.css";
import { Button, Modal, Form } from "react-bootstrap";
import { BsTrashFill } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import {
  updateNewsletter,
  deleteNewsletter,
} from "../store/actions/newsletterAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { app } from "../base";
import parserText from "html-react-parser";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const NewsletterDetail = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [imagePath, setImagePath] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTitle(data.title);
    setImageUrl(data.image_url);
    setContent(data.content);
  }, [data.title, data.image_url, data.content]);
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageUrl(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setImagePath(file);
  };

  const contentHandler = (e, editor) => {
    const texts = editor.getData();

    setContent(texts);
  };

  const saveUpdate = async (e) => {
    e.preventDefault();
    let fileUrl;
    if (imageUrl !== data.image_url) {
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child(imagePath.name);
      await fileRef.put(imagePath);
      fileUrl = await fileRef.getDownloadURL();
    }

    const updatedNewsletter = {
      title,
      image_url: imageUrl !== data.image_url ? fileUrl : imageUrl,
      image_path: imagePath.name,
      content,
    };

    dispatch(
      updateNewsletter(updatedNewsletter, data.timeInNumber, setShow, history)
    );
    setTitle("");
    setImageUrl("");
    setImagePath("");
    setContent("");
  };

  const deletingNewsletter = () => {
    Swal.fire({
      title: "Are you sure want to delete this Newsletter?",
      showCancelButton: true,
      confirmButtonText: `Delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteNewsletter(data.timeInNumber, history));
      }
    });
  };
  return (
    <div>
      <div className="button-containerNewsletterDetail">
        <Button
          variant="info"
          className="button-itemNewsletterDetail"
          onClick={handleShow}
        >
          <GrUpdate /> Update
        </Button>
        <Button variant="danger" onClick={(e) => deletingNewsletter()}>
          <BsTrashFill /> delete
        </Button>
      </div>
      <div>
        <Modal show={show} onHide={handleClose} size="lg">
          <Form onSubmit={(e) => saveUpdate(e)}>
            <Modal.Header closeButton>
              <Modal.Title>Update Newsletter</Modal.Title>
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
                <label htmlFor="container-imageNewsletter">Images</label>
                <div className="image-divNewsletter ">
                  <img
                    src={imageUrl}
                    className="image-newsletter shadow"
                    alt="detail"
                  />
                </div>

                <div className="button-newsletter">
                  <input
                    id="input-newsletter"
                    accept="image/*"
                    type="file"
                    style={{ width: "200px", cursor: "pointer" }}
                    onChange={(e) => imageHandler(e)}
                  />
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                {/* <Form.Control
                  as="textarea"
                  rows={10}
                  defaultValue={data.content}
                  onChange={(e) => contentHandler(e)}
                /> */}
                <CKEditor
                  editor={ClassicEditor}
                  onChange={contentHandler}
                  data={data.content}
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
      <div
        className="container shadow"
        style={{
          padding: "0",
          backgroundColor: "white",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      >
        <div className="image-divDetailNewsletter ">
          <img
            src={data.image_url}
            className="container shadow image-detailNewsletter"
            style={{ padding: "0" }}
            alt="detail"
          />
        </div>
        <div className="container content-newsletter">
          <div className="date-detailNewsletter">
            <p>
              <AiOutlineCalendar /> {data.time.split(" ").slice(1, 4).join(" ")}
            </p>
          </div>
          <div className="title-detailNewsletter">
            <h2>{data.title}</h2>
          </div>
          <div className="content-titleNewsletter">
            <p>{parserText(data.content)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterDetail;
