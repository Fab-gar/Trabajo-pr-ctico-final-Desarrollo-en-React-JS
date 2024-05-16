import {useContext} from 'react'
import { productContex } from '../contexto/prodContex';
import { getDerivedCarr } from '../utils/getDerivedCarr';
import { Link } from 'react-router-dom';

function Carrito() {
 const { Carrito, removeFromCarr } = useContext(productContex);
 const derivedCarr = getDerivedCarr(Carrito);
    return (
      <article>
        {derivedCarr.map((item) => (
      <p className='lista' onClick={ () => removeFromCarr (item.id)}>
        {item.name} - {item.quantity} - {item.totalPrice}
        </p>
        ))}
        <Link to={-1} className='boAtras'>Atras</Link>
       </article>
  )
}

export default Carrito