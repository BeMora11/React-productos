import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { productoURL } from '../../config/api';
import axios from 'axios';
import CardProducto from '../../components/CardProducto';
import auth from '../../config/auth';

const Home = () => {

  const [productos, setProductos] = useState([]);
  const [cargado, setCargado] = useState(false);

  const getProductos = async () => {
    let req = await axios.get(productoURL + '?op=getProductos');
    let res = await req.data;

    setProductos(res);
    setCargado(true);
  }

  useEffect(() => {
    getProductos();
  }, [])

  return (
    <div>
      <Navbar />
      <div className="container">
        <h5 className="my-3">Productos</h5>
        {cargado ?
          ''
          :
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
        <div className="row">
          {productos.map((item, key) => (
            <div key={key} className="col-sm-12 col-md-3 mb-2">
              <CardProducto nombre={item.nombre_producto} precio={item.precio_producto} stock={item.stock_producto} imagen={item.imagen_producto} productoID={item.id_producto} />
            </div>
          ))

          }
        </div>
      </div>
    </div>
  )
}

export default Home
