import React from "react";
import { useParams } from "react-router-dom"; /* use - Hook = Metodo = Funcion*/

const ProductPage = () => {
  const params = useParams();
  const { id } = params;
  const arrayProductos = JSON.parse(localStorage.getItem("products")) || [];
  const prodFilter = arrayProductos.filter(
    (product) => product.id === Number(id)
  );

  const ruta = localStorage.getItem("ruta") || "";

  if (ruta) {
    localStorage.removeItem("ruta");
  }

  const agregarProducto = (id) => {
    const cartLs = JSON.parse(localStorage.getItem("cart")) || [];
    const userLocalStorage = JSON.parse(localStorage.getItem("user"));

    if (!userLocalStorage) {
      location.href = "/login";
      localStorage.setItem("ruta", `/product/${id}`);
      return;
    }

    if (cartLs.length > 0) {
      const prodExistCart = cartLs.filter(
        (product) => product.id === Number(id)
      );
      if (prodExistCart.length === 0) {
        cartLs.push(prodFilter[0]);
        localStorage.setItem("cart", JSON.stringify(cartLs));
        alert("El producto se cargo correctamente al Carrito");
        return;
      } else {
        alert("El producto ya existe en el carrito");
      }
    } else {
      cartLs.push(prodFilter[0]);
      alert("El producto se cargo correctamente al Carrito");
      localStorage.setItem("cart", JSON.stringify(cartLs));
    }
  };

  const agregarFavorito = (id) => {
    const favLS = JSON.parse(localStorage.getItem("favorite")) || [];
    const userLocalStorage = JSON.parse(localStorage.getItem("user"));

    if (!userLocalStorage) {
      location.href = "/login";
      localStorage.setItem("ruta", `/product/${id}`);
      return;
    }

    if (favLS.length > 0) {
      const prodExistCart = favLS.filter(
        (product) => product.id === Number(id)
      );
      if (prodExistCart.length === 0) {
        favLS.push(prodFilter[0]);
        alert("El producto se cargo correctamente a Favoritos");
        localStorage.setItem("favorite", JSON.stringify(favLS));
        return;
      } else {
        alert("El producto ya existe en Favoritos");
      }
    } else {
      favLS.push(prodFilter[0]);
      alert("El producto se cargo correctamente a Favoritos");
      localStorage.setItem("favorite", JSON.stringify(favLS));
    }
  };

  return (
    <>
      {prodFilter.map((product) => (
        <div
          className="d-flex justify-content-center mt-5 align-items-center"
          key={product.id}
        >
          <div className="w-25">
            <img src={product.image} alt="" width={"100%"} />
          </div>
          <div>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <div>
              <button
                className="btn btn-success me-2"
                onClick={() => agregarProducto(product.id)}
              >
                Añadir al Carrito
              </button>
              <button
                className="btn btn-danger"
                onClick={() => agregarFavorito(product.id)}
              >
                Añadir a Favorito
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductPage;
