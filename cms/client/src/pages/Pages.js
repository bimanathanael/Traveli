import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEnglish } from "../store/actions/englishAction";
import { getIndonesia } from "../store/actions/indonesiaAction";
import { useParams } from "react-router-dom";
import TablePages from "../component/TablePages";
import Navigation from "../component/Navigation";
const Pages = () => {
  const dispatch = useDispatch();
  const language = useParams().language;

  const dataEnglish = useSelector((state) => state.englishReducer.english);
  const dataIndonesia = useSelector(
    (state) => state.indonesiaReducer.indonesia
  );

  useEffect(() => {
    language === "en" && dispatch(getEnglish());
    language === "id" && dispatch(getIndonesia());
  }, [dispatch, language]);

  if (language === "en") {
    return (
      <div>
        <Navigation language={"English"} mainParam={language} />
        <TablePages data={dataEnglish} language={language} />
      </div>
    );
  }
  if (language === "id") {
    return (
      <div>
        <Navigation language={"Indonesia"} mainParam={language} />
        <TablePages data={dataIndonesia} language={language} />
      </div>
    );
  }
};

export default Pages;
