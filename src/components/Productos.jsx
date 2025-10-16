import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Styles from './Productos.module.css'

const Productos = ({ agregarProducto }) => {
  
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        setError('Error al cargar productos');
        setCargando(false);
      });
  },[]);

  if (cargando) return <h4>Cargando productos...</h4>;
  if (error) return error;

  return(
    <div className={Styles.productos}>
        {productos.map((producto) => (
            <div className={Styles.prod}>
                <img src={producto.image} height={80} width={80}/>
                <h4>{producto.title}</h4>
                <h2>$ {producto.price}</h2>
                <div>
                <Link to={`/productos/${producto.id}`} >Detalles</Link>
                </div>
                <button className={Styles.agregar} onClick={() => agregarProducto(producto)}>Agregar</button>

            </div>
        ))}
    </div>
  );
};

export default Productos;
