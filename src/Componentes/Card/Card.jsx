/* eslint-disable react/prop-types */

const Card = ({ title, price, image, descripcion, stock, sku }) => {
  return (
    <section className="flex justify-center m-auto">
      <div className="flex cursor-pointer">
        <img src={image} width={500} />
      </div>
      <div className="">
        <h6 className="font-bold text-black-600 text-4xl">{title}</h6>
        <p className="text-lg py-2">{stock ? "En stock" : "Sin Stock"}</p>
        <p className="font-bold text-3xl py-5">${price}</p>
        <p className="text-sm py-2">{descripcion}</p>
        <p className="text-gray-500">SKU:{sku}</p>
        <div className="py-5">
          <p>Talle:</p>
          <ul className="flex gap-4 cursor-pointer text-center">
            <li className="border-solid border-2 hover:border-black p-1 w-8">
              S
            </li>
            <li className="border-solid border-2 hover:border-black p-1 w-8">
              M
            </li>
            <li className="border-solid border-2 hover:border-black p-1 w-8">
              L
            </li>
            <li className="border-solid border-2 hover:border-black p-1 w-8">
              XL
            </li>
          </ul>
        </div>
        <div className="py-5">
          <button className="bg-slate-700 p-3 rounded-lg text-white hover:bg-slate-500">
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Card;
