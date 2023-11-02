import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/Cards.css";

const CardsC = ({ producto }) => {
  const { id, title, price, image } = producto;
  return (
    <div className="col-12 col-md-6 col-lg-4 my-2">
      <Card className="card-class">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="title-card">{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <a href={`/product/${id}`} className="btn btn-outline-success">
            Ver Mas
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsC;
