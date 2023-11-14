import IconShop from "../public/IconShop";
import "./App.css";
import Card from "./Componentes/Card/Card";

function App() {
  const productos = [
    {
      id: "1",
      title: "Remera Blanca",
      price: 21500,
      stock: 2,
      descripcion: "Tela 100% algodón. Remera manga corta. Tejido: Jersey 30.1",
      imageUrl:
        "https://cdn.dcshoes.com.ar/media/catalog/product/cache/2c567871808060a6c6ba6753e18925bd/1/2/1232102264-01_1.jpg",
      sku: 1232102265,
    },
  ];

  return (
    <>
      <nav className="flex place-content-around bg-slate-600 text-white py-4 items-center text-lg  ">
        <a href="/">
          <img
            src="https://cdn.dcshoes.com.ar/media/logo/stores/2/logo-dcshoes.png"
            width={50}
          />
        </a>

        <a className="max-[600px]:hidden" href="/">
          Remeras
        </a>
        <a className="max-[600px]:hidden" href="/">
          Pantalones
        </a>
        <a className="max-[600px]:hidden" href="/">
          Calzado
        </a>
        <a className="max-[600px]:hidden" href="/">
          Camperas
        </a>
        <a href="/">
          <IconShop width={30} />
        </a>
      </nav>
      <div className=" shadow-gray-200 items-center py-7">
        {productos.map(
          ({ id, title, sku, price, imageUrl, stock, descripcion }) => (
            <Card
              title={title}
              key={id}
              price={price}
              image={imageUrl}
              descripcion={descripcion}
              stock={stock}
              sku={sku}
            />
          )
        )}
      </div>
    </>
  );
}

export default App;
