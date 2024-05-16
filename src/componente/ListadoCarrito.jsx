import {useContext} from 'react'

import { productContex } from '../contexto/prodContex'
import { Link } from 'react-router-dom'

function ListadoCarrito() {
 const {carrito} = useContext(productContex)
    return carrito?.length ? (
   
    <Link className='iconcar'  to='/carrito'>
       <img src='src/assets/carrito.png' alt="carrito" /> 
    </Link>
     
  ) : (<p className='caric' style={{color:'black'}}> Carrito</p>);
}

export default ListadoCarrito