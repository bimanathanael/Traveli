import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAdmin } from "../store/actions/userAction";

import TableAdmin from "../component/TableAdmin";
const TableProduct = () => {
  const data = useSelector((state) => state.userReducer.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdmin());
  }, [dispatch]);

  return <div>{data && <TableAdmin data={data} />}</div>;
};

export default TableProduct;
