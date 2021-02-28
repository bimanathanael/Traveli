import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PromoComponent from "../component/Promo";
import { getPromo } from "../store/actions/promoAction";
const Promo = () => {
  const dispatch = useDispatch();
  const data = useSelector((result) => result.promoReducer.promo);
  useEffect(() => {
    dispatch(getPromo());
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
          <PromoComponent data={sortingData()} />
        </div>
      )}
    </div>
  );
};

export default Promo;
