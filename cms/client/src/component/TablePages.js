import React from "react";
import { Table, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const TablePages = ({ data, language }) => {
  const history = useHistory();
  const moveToListTableBeforeUpdate = (dataSection) => {
    history.push({
      pathname: `/cms/${language}/update/${dataSection.pages}`,
    });
  };
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <Table striped bordered hover className="shadow">
          <thead
            variant="dark"
            style={{ backgroundColor: "#007996", color: "white" }}
          >
            <tr>
              <th>Pages</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody variant="info">
            {data.map((dataSection, idx) => (
              <tr key={idx}>
                <td>{dataSection.pages}</td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => moveToListTableBeforeUpdate(dataSection)}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default TablePages;
