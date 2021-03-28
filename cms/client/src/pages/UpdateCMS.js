import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UpdateForm from "../component/UpdateForm";
import { getEnglishByPages } from "../store/actions/englishAction";
import { getIndonesiaByPages } from "../store/actions/indonesiaAction";
import { useParams, useHistory } from "react-router-dom";
import Navigation from "../component/Navigation";

const UpdateCMS = () => {
  const [dataForm, setDataForm] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const language = useParams().language;
  const pages = useParams().pages;
  const section = useParams().section;

  const dataEnglish = useSelector(
    (state) => state.englishReducer.englishUpdate
  );

  const dataIndonesia = useSelector(
    (state) => state.indonesiaReducer.indonesiaUpdate
  );
  useEffect(() => {
    language === "en" && dispatch(getEnglishByPages(pages, history));
    language === "id" && dispatch(getIndonesiaByPages(pages, history));
  }, [pages, dispatch, history, language]);

  useEffect(() => {
    if (language === "en" && dataEnglish) {
      let defaultData = {};
      for (const [key, value] of Object.entries(dataEnglish)) {
        if (key === section) {
          defaultData = value;
        }
      }

      setDataForm(defaultData);
    }
    if (language === "id" && dataIndonesia) {
      let defaultData = {};
      for (const [key, value] of Object.entries(dataIndonesia)) {
        if (key === section) {
          defaultData = value;
        }
      }

      setDataForm(defaultData);
    }
  }, [dataEnglish, dataIndonesia, language, section]);

  const changeDataForm = (msg) => {
    setDataForm(msg);
  };

  if (language === "en") {
    return (
      <div>
        {dataEnglish && Object.keys(dataForm).length !== 0 && (
          <div>
            <Navigation
              language={"English"}
              pages={pages}
              section={section}
              mainParam={language}
            />
            <UpdateForm
              dataForm={dataForm}
              data={dataEnglish}
              setDataForm={(msg) => changeDataForm(msg)}
              language={language}
            />
          </div>
        )}
      </div>
    );
  }
  if (language === "id") {
    return (
      <div>
        {dataIndonesia && Object.keys(dataForm).length !== 0 && (
          <div>
            <Navigation
              language={"Indonesia"}
              pages={pages}
              section={section}
              mainParam={language}
            />
            <UpdateForm
              dataForm={dataForm}
              data={dataIndonesia}
              setDataForm={(msg) => changeDataForm(msg)}
              language={language}
            />
          </div>
        )}
      </div>
    );
  }
};

export default UpdateCMS;
