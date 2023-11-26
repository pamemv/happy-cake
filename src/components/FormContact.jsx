import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormContact() {
  return (
    <Form className="mx-auto">
      <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3 text-center" controlId="formBasicPassword">
        <Form.Label>Descripción</Form.Label>
        <Form.Control />
      </Form.Group>
      <div className="text-center">
        <Button variant="danger" type="submit" className="d-block mx-auto">
          Enviar
        </Button>
      </div>
    </Form>
  );
}

export default FormContact;
