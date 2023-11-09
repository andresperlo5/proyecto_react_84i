import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/Cards.css";

const CardsC = ({ producto, idComponent }) => {
  const { id, title, price, image } = producto;

  const deleteFav = () => {
    const favLS = JSON.parse(localStorage.getItem("favorite")) || [];
    const confirmDeleteProdFav = confirm(
      "Estas seguro de que quieres eliminar a este producto de Favorito?"
    );

    if (confirmDeleteProdFav) {
      const productsFilter = favLS.filter((prod) => prod.id !== id);
      localStorage.setItem("favorite", JSON.stringify(productsFilter));
      location.reload();
    }
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 my-2">
      <Card className="card-class">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="title-card">{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          {idComponent === "favorite" ? (
            <a
              href={"#"}
              className="btn btn-outline-danger"
              onClick={deleteFav}
            >
              Eliminar
            </a>
          ) : (
            <a href={`/product/${id}`} className="btn btn-outline-success">
              Ver Mas
            </a>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsC;
