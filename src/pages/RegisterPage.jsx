import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CarouselC from "../components/CarouselC";
import { useState } from "react";

const RegisterPage = () => {
  const [formValues, setFormValues] = useState({
    user: "",
    pass: "",
    rpass: "",
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

    if (!formValues.user || !formValues.pass || !formValues.rpass) {
      setFormValues(() => ({
        ...formValues,
        user: !formValues.user ? "error" : "",
        pass: !formValues.pass ? "error" : "",
        rpass: !formValues.rpass ? "error" : "",
      }));
    } else {
      if (formValues.pass === formValues.rpass) {
        if (usersLS.length === 0) {
          const newUser = {
            id: 1,
            nombreUsuario: formValues.user,
            contrasenia: formValues.pass,
            role: "admin",
            login: true,
            deleted: false,
          };
          usersLS.push(newUser);
          localStorage.setItem("users", JSON.stringify(usersLS));
          localStorage.setItem("user", JSON.stringify(newUser));
          alert("usuario creado correctamente");
          setTimeout(() => {
            location.href = "/user";
          }, 1000);
        } else {
          const userLsFilter = usersLS.filter(
            (usuario) => usuario.nombreUsuario === formValues.user
          );

          if (userLsFilter.length > 0) {
            return alert("Usuario ya existe");
          }

          const newUser = {
            id: usersLS[usersLS.length - 1].id + 1,
            nombreUsuario: formValues.user,
            contrasenia: formValues.pass,
            role: "user",
            login: true,
            deleted: false,
          };
          usersLS.push(newUser);
          localStorage.setItem("users", JSON.stringify(usersLS));
          localStorage.setItem("user", JSON.stringify(newUser));
          alert("usuario creado correctamente");
          setTimeout(() => {
            location.href = "/user";
          }, 1000);
        }
      } else {
        alert("las contraseñas no coinciden");
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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Repetir Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="rpass"
              placeholder="Password"
              onChange={changeValue}
              className={
                formValues.rpass === "error"
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            {formValues.rpass === "error" && (
              <p className="text-danger">Campo repetir contraseña Vacío</p>
            )}
          </Form.Group>

          <Button variant="success" type="submit" onClick={handleClick}>
            Registrarse
          </Button>
        </Form>
      </div>
    </>
  );
};

export default RegisterPage;
