import React from 'react';
import { Link } from 'react-router-dom';

const CardProducto = (props) => {

  const { nombre, precio, stock, imagen, productoID } = props;

  return (
    <div className="card">
      <img src={imagen} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <h6 className="card-subtitle mb-2 text-muted">${precio}</h6>
        <p className="card-text">Stock: {stock}</p>
        <hr className="m-2" />
        <div className="d-grid ">
          <Link to={`/producto/${productoID}`} className="btn btn-sm btn-primary">Ver más</Link>
        </div>
      </div>
    </div>
  )
}

export default CardProducto
