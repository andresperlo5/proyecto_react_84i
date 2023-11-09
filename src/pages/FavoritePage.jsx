import React from "react";
import CardsC from "../components/CardsC";

const FavoritePage = () => {
  const favLS = JSON.parse(localStorage.getItem("favorite")) || [];

  return (
    <>
      <div className="container">
        <div className="row">
          {favLS.length > 0 ? (
            favLS.map((product) => (
              <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                <CardsC producto={product} idComponent="favorite" />
              </div>
            ))
          ) : (
            <h1 className="text-center py-5">
              No hay productos en Favoritos por el momento
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoritePage;
