/* eslint-disable react/prop-types */
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const InputFloat = ({ label, valor, tipo, myTitle }) => {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label={label}
        className="mb-3"
        readOnly
      >
        <Form.Control
          title={myTitle}
          type={tipo}
          // placeholder="ej: Alundain"
          ref={valor}
        />
      </FloatingLabel>
    </>
  );
};

export default InputFloat;
