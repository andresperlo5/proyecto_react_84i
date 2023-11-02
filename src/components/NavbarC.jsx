import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/NavbarC.css";

const NavbarC = () => {
  const userLS = JSON.parse(localStorage.getItem("user"));

  const cerrarSesion = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    const userPosition = users.findIndex((usuario) => usuario.id === userLS.id);
    users[userPosition].login = false;
    localStorage.removeItem("user");
    localStorage.setItem("users", JSON.stringify(users));
    setTimeout(() => {
      location.href = "/";
    }, 1000);
  };

  return (
    <Navbar expand="lg" className="bg-personalizado">
      <Container fluid>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
          {userLS?.login ? (
            <Nav className="ms-auto">
              <Nav.Link href="#" onClick={cerrarSesion}>
                Cerrar Sesion
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
              <Nav.Link href="/register">Registrarse</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
