import React, { useEffect } from "react";
import NewsletterDetailComponent from "../component/NewsletterDetail";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOneNewsletter } from "../store/actions/newsletterAction";
const NewsletterDetail = () => {
  const query = new URLSearchParams(useLocation().search);
  const param = query.get("time");

  const dispatch = useDispatch();
  const data = useSelector(
    (result) => result.newsletterReducer.newsletterDetail
  );
  useEffect(() => {
    dispatch(getOneNewsletter(param));
  }, [dispatch, param]);
  return (
    <div>
      {Object.keys(data).length !== 0 && (
        <div>
          <NewsletterDetailComponent data={data} />
        </div>
      )}
    </div>
  );
};

export default NewsletterDetail;
