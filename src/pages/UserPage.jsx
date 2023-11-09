import { useEffect, useState } from "react";
import CardsC from "../components/CardsC";
import CarouselC from "../components/CarouselC";
import agregarProductosLocalStorage from "../helps/arrayProductos";

const UserPage = () => {
  const [estado, setEstado] = useState();

  const arrayProductos = JSON.parse(localStorage.getItem("products")) || [];
  const urlImageHomePage =
    "https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-image_2916211.jpg";

  useEffect(() => {
    agregarProductosLocalStorage();
  }, []);

  return (
    <>
      <CarouselC urlImage={urlImageHomePage} ancho={"100%"} />
      <div className="container mt-5">
        <div className="row">
          {arrayProductos.map((producto) => (
            <CardsC producto={producto} key={producto.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UserPage;
