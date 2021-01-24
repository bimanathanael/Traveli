import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import PaginationFactory from "react-bootstrap-table2-paginator";
import { Container } from "react-bootstrap";

const TableHistory = ({ data }) => {
  const columns = [
    {
      dataField: "username",
      text: "Admin Id",
      headerStyle: { backgroundColor: "#007996", color: "white" },
    },
    {
      dataField: "pages",
      text: "Pages",
      headerStyle: { backgroundColor: "#007996", color: "white" },
    },
    {
      dataField: "section",
      text: "Section",
      headerStyle: { backgroundColor: "#007996", color: "white" },
    },
    {
      dataField: "time",
      text: "Time Update",
      headerStyle: { backgroundColor: "#007996", color: "white" },
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <BootstrapTable
          striped
          bordered
          hover
          className="shadow-lg"
          variant="light"
          keyField="time"
          data={data}
          columns={columns}
          pagination={PaginationFactory()}
        ></BootstrapTable>
      </Container>
    </div>
  );
};

export default TableHistory;
