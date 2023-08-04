import ButtonDep from "../components/Button/ButtonDep";
import InputFloat from "../components/InputFloat";
import TextAreasFloat from "../components/TextAreasFloat";
import { useRef } from "react";

const Contact = () => {
  let emailRef = useRef();
  let textAreaRef = useRef();

  return (
    <>
      <div style={{ margin: "3em 0" }}>
        <h2
          style={{
            marginTop: "2em",
            fontWeight: "500",
            fontFamily: "monospace",
            marginBottom: "1em",
          }}
        >
          Formulario de contacto
        </h2>
        <InputFloat label={"Email"} valor={emailRef} tipo={"email"} />
        <TextAreasFloat
          label={"Mensaje"}
          placeholderText={"escriba su mensaje aquí"}
          valor={textAreaRef}
        />
        <ButtonDep
          onClick={() => {
            alert(
              "Su mensaje: " + textAreaRef.current.value + " ha sido enviado"
            );
            window.location.reload();
          }}
          titulo={"Enviar"}
        />
      </div>
    </>
  );
};

export default Contact;
