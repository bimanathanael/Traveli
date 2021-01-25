import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateEnglish } from "../store/actions/englishAction";
import { updateIndonesia } from "../store/actions/indonesiaAction";

const UpdateForm = ({ setDataForm, dataForm, data, language }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const pages = useParams().pages;
  const section = useParams().section;
  const dataFormHandler = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const backToHome = (e) => {
    history.push(`/cms/${language}`);
  };
  const saveUpdate = (e) => {
    e.preventDefault();

    if (language === "en") {
      dispatch(updateEnglish(pages, dataForm, history, section));
      setDataForm("");
    }
    if (language === "id") {
      dispatch(updateIndonesia(pages, dataForm, history, section));
      setDataForm("");
    }
  };

  const filteringData = () => {
    const newList = {};
    for (const [key, value] of Object.entries(data)) {
      if (key !== pages && key.split(/(?=[A-Z])/)[0] === section) {
        newList[key] = value;
      }
    }
    return newList;
  };
  return (
    <div>
      <Container className="border border-secondary rounded shadow-lg">
        <Form onSubmit={(e) => saveUpdate(e)} style={{ margin: "20px" }}>
          {Object.entries(filteringData())
            .filter((filt) => filt[0] !== "pages")
            .map((value, idx) => (
              <div key={idx}>
                <Form.Group>
                  <Form.Label style={{ textAlign: "left" }}>
                    {value[0].split(/(?=[A-Z])/).join(" ")}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => dataFormHandler(e)}
                    name={value[0]}
                    placeholder="Enter Header"
                    defaultValue={value[1]}
                  />
                </Form.Group>
              </div>
            ))}
          <div style={{ textAlign: "center" }}>
            <Button variant="success" type="submit">
              Update
            </Button>
            <br />
            <Button
              style={{ marginTop: "10px" }}
              variant="danger"
              onClick={() => backToHome()}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default UpdateForm;