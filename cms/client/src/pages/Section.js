import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEnglishByPages } from "../store/actions/englishAction";
import { getIndonesiaByPages } from "../store/actions/indonesiaAction";
import { useHistory, useParams } from "react-router-dom";
import TableSection from "../component/TableSection";
import Navigation from "../component/Navigation";
const TableProduct = () => {
  const dispatch = useDispatch();
  const language = useParams().language;
  const pages = useParams().pages;

  const dataEnglish = useSelector(
    (state) => state.englishReducer.englishUpdate
  );

  const dataIndonesia = useSelector(
    (state) => state.indonesiaReducer.indonesiaUpdate
  );
  const history = useHistory();

  useEffect(() => {
    language === "en" && dispatch(getEnglishByPages(pages, history));
    language === "id" && dispatch(getIndonesiaByPages(pages, history));
  }, [dispatch, pages, language, history]);

  if (language === "en") {
    return (
      <div>
        <Navigation language={"English"} pages={pages} mainParam={language} />
        <TableSection data={dataEnglish} language={language} pages={pages} />
      </div>
    );
  }

  if (language === "id") {
    return (
      <div>
        <Navigation language={"Indonesia"} pages={pages} mainParam={language} />
        <TableSection data={dataIndonesia} language={language} pages={pages} />
      </div>
    );
  }
};

export default TableProduct;
