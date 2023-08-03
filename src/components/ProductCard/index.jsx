import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({name, description, image}) => {
    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       {description}
                    </Card.Text>
                    <Button variant="primary">Más detalles</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;