import React, { useState } from "react";
import Swal from "sweetalert2";
import "./newsletter.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import { addNewsletter } from "../store/actions/newsletterAction";
import { app } from "../base";
import { useDispatch } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const Newsletter = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  const [imagePath, setImagePath] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    console.log(texts);
    setContent(texts);
  };
  const addNewNewsletter = async (e) => {
    e.preventDefault();
    if (!imagePath) {
      Swal.fire({ icon: "error", text: "image cannot empty" });
    } else {
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child(imagePath.name);
      await fileRef.put(imagePath);
      let fileUrl = await fileRef.getDownloadURL();
      const newNewsletter = {
        title,
        image_url: fileUrl,
        image_path: imagePath.name,
        content,
      };
      dispatch(addNewsletter(newNewsletter, setShow));
      setTitle("");
      setImageUrl("");
      setImagePath("");
      setContent("");
    }
  };
  const moveToNewsletterDetail = (time, title) => {
    history.push(
      `/newsletter/detail?time=${time}&title=${title.split(" ").join("-")}`
    );
  };

  return (
    <div>
      <div className="button-containerNewsletter">
        <Button variant="primary" onClick={handleShow}>
          Add
        </Button>
      </div>
      <div>
        <Modal show={show} onHide={handleClose} size="lg">
          <Form onSubmit={(e) => addNewNewsletter(e)}>
            <Modal.Header closeButton>
              <Modal.Title>Add Newsletter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ex: Flash Sale"
                  onChange={(e) => titleHandler(e)}
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="container-image">Images</label>
                {imageUrl && (
                  <div className="image-divNewsletter ">
                    <img
                      src={imageUrl}
                      className="image-newsletter shadow"
                      alt="detail"
                    />
                  </div>
                )}

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
                <Form.Label>Content</Form.Label>
                <CKEditor editor={ClassicEditor} onChange={contentHandler} />
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
      <div className="cards-containerNewsletter container">
        {data.map((result, idx) => (
          <div key={idx}>
            <div className="cardsNewsletter shadow">
              <div
                className="cardNewsletter container"
                onClick={() =>
                  moveToNewsletterDetail(result.timeInNumber, result.title)
                }
              >
                <div className="card-divImageNewsletter">
                  <img
                    className="card-imageNewsletter shadow container rounded"
                    src={result.image_url}
                    alt="newsletter-images"
                  />
                </div>
                <div className="card-contentNewsletter container">
                  <div className="card-timeNewsletter">
                    <p style={{ margin: "0" }}>{result.time}</p>
                  </div>
                  <div className="card-titleNewsletter">
                    {result.title.length < 50 ? (
                      <p style={{ margin: "0" }}>{result.title}</p>
                    ) : (
                      <p style={{ margin: "0" }}>
                        {result.title.substring(0, 50) + "..."}
                      </p>
                    )}
                  </div>
                  <div className="card-contentsNewsletter">
                    <p style={{ margin: "0" }}>
                      {result.content
                        .split("<p>")
                        .join(" ")
                        .split("</p>")
                        .join(" ")
                        .substring(0, 60) + "..."}
                    </p>
                  </div>
                  {/* <div className="card-readmoreNewsletter">
                    <p>READ MORE</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
