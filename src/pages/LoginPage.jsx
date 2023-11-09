import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CarouselC from "../components/CarouselC";
import { useState } from "react";

const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    user: "",
    pass: "",
  });

  const usersLS = JSON.parse(localStorage.getItem("users")) || [];

  const urlImageReg =
    "https://www.primeraedicion.com.ar/wp-content/uploads/2021/01/Wissen_Teaserbild.jpg";

  const changeValue = (ev) => {
    const { name, value } = ev.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClick = (ev) => {
    ev.preventDefault();

    if (!formValues.user || !formValues.pass) {
      setFormValues(() => ({
        ...formValues,
        user: !formValues.user ? "error" : "",
        pass: !formValues.pass ? "error" : "",
      }));
    } else {
      const userExist = usersLS.filter(
        (usuario) => usuario.nombreUsuario === formValues.user
      );
      const userPosition = usersLS.findIndex(
        (usuario) => usuario.nombreUsuario === formValues.user
      );

      if (userExist.length > 0) {
        if (userExist[0].contrasenia === formValues.pass) {
          if (userExist[0].role === "admin") {
            const ruta = localStorage.getItem("ruta") || "";

            usersLS[userPosition].login = true;
            localStorage.setItem("users", JSON.stringify(usersLS));
            localStorage.setItem("user", JSON.stringify(userExist[0]));

            setTimeout(() => {
              if (ruta) {
                location.href = `${ruta}`;
              } else {
                location.href = "/admin";
              }
            }, 1000);
          } else {
            const ruta = localStorage.getItem("ruta") || "";
            usersLS[userPosition].login = true;
            localStorage.setItem("users", JSON.stringify(usersLS));
            localStorage.setItem("user", JSON.stringify(userExist[0]));

            setTimeout(() => {
              if (ruta) {
                location.href = `${ruta}`;
              } else {
                location.href = "/user";
              }
            }, 1000);
          }
        } else {
          alert("El usuario y/o la contraseña son incorrecto");
        }
      } else {
        alert("El usuario no existe");
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <CarouselC urlImage={urlImageReg} ancho={"25%"} />
        <Form className="ms-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              name="user"
              onChange={changeValue}
              className={
                formValues.user === "error"
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            {formValues.user === "error" && (
              <p className="text-danger">Campo usuario Vacío</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="pass"
              placeholder="Password"
              onChange={changeValue}
              className={
                formValues.pass === "error"
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            {formValues.pass === "error" && (
              <p className="text-danger">Campo contraseña Vacío</p>
            )}
          </Form.Group>

          <Button variant="success" type="submit" onClick={handleClick}>
            Iniciar Sesion
          </Button>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
