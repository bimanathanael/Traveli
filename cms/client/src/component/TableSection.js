import React from "react";
import { Table, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const TableSection = ({ data, language, pages }) => {
  const history = useHistory();
  // const listData = () => {
  //   const listObj = {};
  //   for (const [key] of Object.entries(data)) {
  //     if (key !== "pages") {
  //       listObj[key.split(/(?=[A-Z])/)[0]] = key.split(/(?=[A-Z])/)[0];
  //     }
  //   }
  //   return Object.keys(listObj);
  // };
  const moveToFormUpdate = (dataFromTable) => {
    history.push({
      pathname: `/cms/${language}/${pages}/${dataFromTable}/update`,
      mainData: data,
      dataUpdate: dataFromTable,
    });
    window.location.reload();
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
              Object.keys(data).map((dataEng, idx) => (
                <tr key={idx}>
                  <td>{dataEng.split(/(?=[A-Z])/).join(" ")}</td>
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
