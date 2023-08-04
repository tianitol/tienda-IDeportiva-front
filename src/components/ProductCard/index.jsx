import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProductCard = ({ name, description, image, gender, path, price }) => {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: "22rem", height: "40rem", margin: "1em" }}>
        <Card.Img
          variant="top"
          src={image}
          style={{ maxHeight: "70%", width: "auto" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>${price}</Card.Text>
          <Card.Text>{gender}</Card.Text>
          <Link to={path} className="button btn btn-primary">
            Detalle
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
