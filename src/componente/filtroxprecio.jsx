import {useContext}from 'react'
import { productContex } from '../contexto/prodContex'

function Filtroxprecio() {
  const {maxPrice, handleMaxPrice} = useContext(productContex);
  return (
    <div>
      <p className='filtro'>Top price ${maxPrice}</p>
      <input  className='filtro' type="range" name='maxPrice' id='maxPrice'defaultValue={1000} onChange={(e) => handleMaxPrice(e.target.value)} min={0} max={1000}step={5} />
      

    </div>
  )
}

export default Filtroxprecio