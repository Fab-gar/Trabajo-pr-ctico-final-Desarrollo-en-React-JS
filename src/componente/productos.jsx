import { useContext} from 'react'
import { productContex } from '../contexto/prodContex'

function productos({ prod }) {
 const { addToCarrito } = useContext(productContex);
  return (
    <div className='card' key={prod.id} >
        <h3  style={{fontSize:'18px'}}>{prod.title}</h3>
        <div >
           <img className='image' src={prod.image} alt={prod.title}  />
        <p className='price'>${prod.price}</p>

        <button className='carrit' onClick={() => addToCarrito(prod)}>Añadir al Carrito</button>
        
        </div>  
        <p className='text'>{prod.description.slice(0,50)}...</p>
    </div>
  )
}

export default productos