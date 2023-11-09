import Table from "react-bootstrap/Table";

const CartPage = () => {
  const cartLS = JSON.parse(localStorage.getItem("cart")) || [];

  const deleteProdCart = (id) => {
    const confirmDeleteProductCart = confirm(
      "Estas seguro de que quieres eliminar este producto del Carrito?"
    );

    if (confirmDeleteProductCart) {
      const productFilterCart = cartLS.filter((prod) => prod.id !== id);
      localStorage.setItem("cart", JSON.stringify(productFilterCart));
      location.reload();
    }
  };

  return (
    <>
      {cartLS.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Elimiar Productos Carrito</th>
            </tr>
          </thead>
          <tbody>
            {cartLS.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <input type="number" className="w-25" value={1} />
                </td>
                <td>
                  <p>{product.price}</p>
                </td>
                <td className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteProdCart(product.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h1 className="text-center py-5">
          No hay productos en el Carrito por el momento
        </h1>
      )}
    </>
  );
};

export default CartPage;
