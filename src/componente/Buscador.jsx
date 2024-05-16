import { useContext } from 'react'
import { productContex } from '../contexto/prodContex';
function Buscador() {
  const { handleQuery} =useContext (productContex);

  return (
    <>
    <form className='buscador'>
      
        <input type='search'className="buscador__input" name='' id='searchTerm'placeholder='Buscar...' aria-level='search' onChange={(e)=> handleQuery(e.target.value)}/>
    </form>
    
    </>
  );
}

export default Buscador;