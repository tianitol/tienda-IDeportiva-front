/* eslint-disable react/prop-types */
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const TextAreasFloat = ({ label, placeholderText, valor }) => {
  return (
    <FloatingLabel controlId="floatingTextarea2" label={label}>
      <Form.Control
        as="textarea"
        placeholder={placeholderText}
        style={{ height: "100px" }}
        ref={valor}
      />
    </FloatingLabel>
  );
};

export default TextAreasFloat;
