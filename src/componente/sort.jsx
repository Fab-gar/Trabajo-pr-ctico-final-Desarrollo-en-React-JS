import React from 'react'
import { BsSortNumericDown } from 'react-icons/bs'
import { BsSortNumericDownAlt } from 'react-icons/bs'
import { useContext } from 'react'
import { productContex } from '../contexto/prodContex'
function Sort() {
    const {sortedMaxToMin, handleSort} = useContext(productContex);

  return (
    <section>
        {sortedMaxToMin ? (
            <BsSortNumericDown 
        style={{fontSize:'42px',padding:'35px', color:'black', cursor:'pointer'}}
        onClick={handleSort}
        />
        ) : (
            <BsSortNumericDownAlt 
        style={{fontSize:'42px',padding:'35px', color:'black', cursor:'pointer'}}
        onClick={handleSort}
        />

        )}
    </section>
  );
}

export default Sort;