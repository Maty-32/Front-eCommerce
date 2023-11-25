import { useContext } from "react";
import "./Card.scss";
import CarritoContext from "../contexts/CarritoContext";

const Card = ({ productos }) => {

  const { agregarCarritoContext } = useContext(CarritoContext);

  const handleClick = (producto) => {
    /* Swal.fire({
      title: 'agregaste un producto al carrito',
      color: '#000',
      position:'top-end',
      toast:true,
      showConfirmButton: false,
      timer:3000
    }) */
    agregarCarritoContext(producto);
  };

  return (
    <>
      {productos.map((producto, idx) => (
        <div key={idx} className="section-cards" href="/producto">
          <div className="card">
            <article className="card__article">
              <div className="card__image-container">
                <img
                  className="card__image"
                  src={producto.foto}
                  alt={producto.nombre}
                />
              </div>
              <div className="card__content">
                <h2 className="card_heading">{producto.nombre}</h2>
                <p className="card_precio">$ {producto.precio}</p>
              </div>
              <button className="card__btn" onClick={() => handleClick}>
                Agregar
              </button>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
