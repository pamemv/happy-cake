import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="danger">
      <Container className="justify-content-start">
        {/* Links */}
        <div
          style={{
            display: "flex",
            flexGrow: "1",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Link to="/" className="text-white ms-3 text-decoration-none">
              🏠 Home
            </Link>
            <Link
              to="/contacto"
              className="text-white ms-3 text-decoration-none"
            >
              📞 Contacto
            </Link>
          </div>
          <div>
            <Navbar.Brand style={{ color: "white" }}>
              Happy Cake 🍰
            </Navbar.Brand>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};
export default Navigation;
