const agregarProductosLocalStorage = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  localStorage.setItem("products", JSON.stringify(data));
};

export default agregarProductosLocalStorage;
