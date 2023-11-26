import React from "react";
import FormContact from "../components/FormContact";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contacto = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexGrow: "1",
          justifyContent: "center",
          marginTop: "30px",
          fontSize: "30px",
        }}
      >
        <div>Cuentanos, ¿en que te podemos ayudar?</div>
      </div>

      <Row className="p-5 justify-content-center">
        <Col md={10}>
          <FormContact />
        </Col>
      </Row>
    </>
  );
};

export default Contacto;
