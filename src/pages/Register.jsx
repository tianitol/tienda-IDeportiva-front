import ButtonDep from "../components/Button/ButtonDep";
import Col from "react-bootstrap/Col";
import InputFloat from "../components/InputFloat/index";
import axios from "axios";
import { useRef } from "react";

const Register = () => {
  let usernameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let password2Ref = useRef();

  const register = () => {
    let usernameValue = usernameRef.current.value;
    let emailValue = emailRef.current.value;
    let passValue = passwordRef.current.value;
    let passValue2 = password2Ref.current.value;

    axios.defaults.withCredentials = true;
    if (passValue === passValue2) {
      axios
        .post("http://localhost:3000/api/create", {
          user: usernameValue,
          password: passValue,
          email: emailValue,
        })
        .then((response) => {
          alert("User successfully created");
          console.log(response.data);
          window.location.reload();
        })
        .catch((err) => {
          //console.error(err.response.data);
          alert(err.response.data);
        });
    } else {
      alert("Las contraseñas no coinciden");
    }
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
        Registrar nuevo usuario
      </h2>
      <Col md={5} style={{ marginTop: "3em" }}>
        <InputFloat
          label={"Nombre de usuario"}
          valor={usernameRef}
          tipo={"text"}
          myTitle={'Ej: Dorian'}
        />
        <InputFloat 
        label={"Correo"} 
        valor={emailRef} 
        tipo={"email"}
        myTitle={'Ej: usuario@email.com'}
        />
        <InputFloat
          label={"Contraseña"}
          valor={passwordRef}
          tipo={"password"}
          myTitle={'Debe incluir al menos una mayúscula, una minúscula, un número, un caracter especial y un largo de 6 caracteres.'}
        />
        <InputFloat
          label={"Repita Contraseña"}
          valor={password2Ref}
          tipo={"password"}
          myTitle={'Debe ser idéntica a la contraseña anterior.'}
        />

        <ButtonDep titulo={"Registrar"} onClick={register} />
      </Col>
    </>
  );
};

export default Register;
