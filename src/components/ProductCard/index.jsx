import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const ProductCard = ({name, description, image, gender}) => {
    
    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        {gender}
                    </Card.Text>
                    <Link to={"/details/" /*aca deberia ir el id */} className="button btn btn-primary">Detalle</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;