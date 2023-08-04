/* eslint-disable react/prop-types */
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const InputFloat = ({ label, valor, tipo }) => {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label={label}
        className="mb-3"
        readOnly
      >
        <Form.Control
          type={tipo}
          // placeholder="ej: Alundain"
          ref={valor}
        />
      </FloatingLabel>
    </>
  );
};

export default InputFloat;
