import React, { useState } from "react";
import Swal from "sweetalert2";
import "./promo.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import { addPromo } from "../store/actions/promoAction";
import { app } from "../base";
import { useDispatch } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const Promo = ({ data }) => {
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
  const addNewPromo = async (e) => {
    e.preventDefault();
    if (!imagePath) {
      Swal.fire({ icon: "error", text: "image cannot empty" });
    } else {
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child(imagePath.name);
      await fileRef.put(imagePath);
      let fileUrl = await fileRef.getDownloadURL();
      const newPromo = {
        title,
        image_url: fileUrl,
        image_path: imagePath.name,
        content,
      };
      dispatch(addPromo(newPromo, setShow));
      setTitle("");
      setImagePath("");
      setContent("");
    }
  };
  const moveToPromoDetail = (time, title) => {
    history.push(
      `/promo/detail?time=${time}&title=${title.split(" ").join("-")}`
    );
  };

  return (
    <div>
      <div className="button-container">
        <Button variant="primary" onClick={handleShow}>
          Add
        </Button>
      </div>
      <div>
        <Modal show={show} onHide={handleClose} size="lg">
          <Form onSubmit={(e) => addNewPromo(e)}>
            <Modal.Header closeButton>
              <Modal.Title>Add Promo</Modal.Title>
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
                  <div className="container-imagePromo">
                    <div className="container-formPromo">
                      <div className="wrapperPromo">
                        <div className="image">
                          <img src={imageUrl} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="button-promo">
                  <input
                    id="input-promo"
                    accept="image/*"
                    type="file"
                    style={{ width: "200px", cursor: "pointer" }}
                    onChange={(e) => imageHandler(e)}
                  />
                  {/* <div id="custom-btnPromo">
                    <label htmlFor="input" id="text-custom-btnPromo">
                      Add Image
                    </label>
                  </div> */}
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
      <div className="cards-container">
        {data.map((result, idx) => (
          <div key={idx}>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  moveToPromoDetail(result.timeInNumber, result.title)
                }
              >
                <div>
                  <img
                    className="card-image"
                    src={result.image_url}
                    alt="promo-images"
                  />
                </div>
                <div className="card-content">
                  <div className="card-title">
                    {result.title.length < 45 ? (
                      <p>{result.title}</p>
                    ) : (
                      <p>{result.title.substring(0, 45) + "..."}</p>
                    )}
                  </div>
                  <div className="card-time">
                    <p>
                      <AiOutlineCalendar />
                      {result.time.split(" ").splice(1, 3).join(" ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promo;
