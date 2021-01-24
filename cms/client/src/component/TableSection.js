import React from "react";
import { Table, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const TableSection = ({ data, language }) => {
  const history = useHistory();
  const listData = () => {
    const listObj = {};
    for (const [key] of Object.entries(data)) {
      if (key !== "pages") {
        listObj[key.split(/(?=[A-Z])/)[0]] = key.split(/(?=[A-Z])/)[0];
      }
    }
    return Object.keys(listObj);
  };
  const moveToFormUpdate = (dataFromTable) => {
    history.push({
      pathname: `/cms/${language}/update/${data.pages}/${dataFromTable}`,
      mainData: data,
      dataUpdate: dataFromTable,
    });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Container>
        <Table striped bordered hover className="shadow" variant="light">
          <thead style={{ backgroundColor: "#007996", color: "white" }}>
            <tr>
              <th>Section</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              listData().map((dataEng, idx) => (
                <tr key={idx}>
                  <td>{dataEng}</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => moveToFormUpdate(dataEng)}
                    >
                      Update
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TableSection;
