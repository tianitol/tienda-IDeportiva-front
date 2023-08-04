import ButtonDep from "../components/Button/ButtonDep";
import Col from "react-bootstrap/Col";
import InputFloat from "../components/InputFloat";
import axios from "axios";
import { useRef } from "react";

const Login = () => {
  let emailRef = useRef();
  let passwordRef = useRef();

  const login = () => {
    axios.defaults.withCredentials = true;

    // console.log(emailRef.current.value, ", pass: ", passwordRef.current.value);
    axios
      .post(
        "http://localhost:3000/api/auth/login" +
          `?password=${passwordRef.current.value}&email=${emailRef.current.value}`
      )
      .then((response) => {
        console.log(response.data);
        axios.defaults.withCredentials
          ? (window.location.href = "/")
          : (window.location.href = "/login");
      })
      .catch((e) => {
        console.log(e);
        window.location.href = "/login";
      });
  };

  return (
    <>
      <h2
        style={{
          marginTop: "2em",
          fontWeight: "500",
          fontFamily: "monospace",
        }}
      >
        Ingresa a tu cuenta
      </h2>

      <Col md={4} style={{ marginTop: "3em" }}>
        <InputFloat label={"Correo"} tipo={"email"} valor={emailRef} />
        <InputFloat
          label={"Contraseña"}
          tipo={"password"}
          valor={passwordRef}
        />
        <ButtonDep titulo={"Ingresar"} onClick={login} />
      </Col>
    </>
  );
};

export default Login;
