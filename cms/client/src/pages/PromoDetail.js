import React, { useEffect } from "react";
import PromoDetailComponent from "../component/PromoDetail";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getOnePromo } from "../store/actions/promoAction";
const Promodetail = () => {
  const query = new URLSearchParams(useLocation().search);
  const param = query.get("time");

  const dispatch = useDispatch();
  const data = useSelector((result) => result.promoReducer.promoDetail);
  useEffect(() => {
    dispatch(getOnePromo(param));
  }, [dispatch, param]);
  return (
    <div>
      {Object.keys(data).length !== 0 && (
        <div>
          <PromoDetailComponent data={data} />
        </div>
      )}
    </div>
  );
};

export default Promodetail;
