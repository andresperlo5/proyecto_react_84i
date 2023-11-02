import Carousel from "react-bootstrap/Carousel";

const CarouselC = ({ urlImage, ancho }) => {
  return (
    <>
      <img src={urlImage} alt="" width={ancho} />
    </>
  );
};

export default CarouselC;
