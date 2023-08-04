/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";

const ButtonDep = ({ titulo, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="outline-success"
      type="button"
      style={{ margin: "3em 7em", width: "10rem" }}
    >
      {titulo}
    </Button>
  );
};

export default ButtonDep;
