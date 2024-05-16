import React, { useContext } from 'react';
import { productContex } from '../contexto/prodContex';
import Navbar from '../componente/navbar'
import Productos from '../componente/productos';
import Sort from '../componente/sort';
import Filtroxprecio from '../componente/filtroxprecio';

import Buscador from '../componente/Buscador';
import ListadoCarrito from '../componente/ListadoCarrito';

 function Producto() {
  const{producto, maxPrice, query}= useContext(productContex);
  return (
    <>
    <header >
      <h1>eCommerse</h1>
        <Navbar/>
        <div style={{height:'120px', display:'flex', justifyContent:'space-between'}}>
          <Sort/>
        <Filtroxprecio/>
        <Buscador/>
        <ListadoCarrito/>
   </div>
        
    </header>
        <h2>Listado de producto</h2>

        <main className='container'> 
            {producto.
            filter((prod) => prod.price <= maxPrice && prod.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
            .map((prod) => (
            <Productos prod={prod} key={prod.id}/>
            ))}
        </main>
 </>
  );
}
export default Producto;