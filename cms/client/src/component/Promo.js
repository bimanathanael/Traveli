import React, { useState } from "react";
import Swal from "sweetalert2";
import "./promo.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import { addPromo } from "../store/actions/promoAction";
import { app } from "../base";
import { useDispatch } from "react-redux";
import parserText from "html-react-parser";
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
      setImageUrl("");
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
      <div className="button-containerPromo">
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
                  <div className="image-divPromo ">
                    <img
                      src={imageUrl}
                      className="image-promo shadow"
                      alt="detail"
                    />
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
      <div className="cards-containerPromo container">
        {data.map((result, idx) => (
          <div key={idx}>
            <div className="cardsPromo shadow">
              <div
                className="cardPromo container "
                onClick={() =>
                  moveToPromoDetail(result.timeInNumber, result.title)
                }
              >
                <div className="card-divImagePromo ">
                  <img
                    className="card-imagePromo shadow container rounded "
                    src={result.image_url}
                    alt="promo-images"
                  />
                </div>
                <div className="card-contentPromo container">
                  <div className="card-timePromo">
                    <p style={{ margin: "0" }}>{result.time}</p>
                  </div>
                  <div className="card-titlePromo">
                    {result.title.length < 50 ? (
                      <p style={{ margin: "0" }}>{result.title}</p>
                    ) : (
                      <p style={{ margin: "8px 0 8px 0" }}>
                        {result.title.substring(0, 50) + "..."}
                      </p>
                    )}
                  </div>
                  <div className="card-contentsPromo">
                    <p style={{ margin: "0" }}>
                      {result.content
                        .split("<p>")
                        .join(" ")
                        .split("</p>")
                        .join(" ")
                        .substring(0, 60) + "..."}
                    </p>
                  </div>
                  {/* <div className="card-readmorePromo">
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

export default Promo;
