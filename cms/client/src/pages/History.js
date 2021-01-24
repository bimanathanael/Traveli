import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHistory } from "../store/actions/historyAction";
import TableHistory from "../component/TableHistory";

const History = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.historyReducer.history);

  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);

  const filterData = () => {
    if (data.length !== 0) {
      data.sort((a, b) =>
        a.timeInNumber > b.timeInNumber
          ? -1
          : b.timeInNumber > a.timeInNumber
          ? 1
          : 0
      );

      return data;
    }
  };

  return <div>{data.length !== 0 && <TableHistory data={filterData()} />}</div>;
};

export default History;
