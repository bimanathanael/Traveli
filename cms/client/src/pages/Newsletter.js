import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsletterComponent from "../component/Newsletter";
import { getNewsletter } from "../store/actions/newsletterAction";
const Newsletter = () => {
  const dispatch = useDispatch();
  const data = useSelector((result) => result.newsletterReducer.newsletter);
  useEffect(() => {
    dispatch(getNewsletter());
  }, [dispatch]);

  const sortingData = () => {
    return data.sort((a, b) =>
      a.timeInNumber > b.timeInNumber
        ? -1
        : b.timeInNumber > a.timeInNumber
        ? 1
        : 0
    );
  };
  return (
    <div>
      {data && (
        <div>
          <NewsletterComponent data={sortingData()} />
        </div>
      )}
    </div>
  );
};

export default Newsletter;
