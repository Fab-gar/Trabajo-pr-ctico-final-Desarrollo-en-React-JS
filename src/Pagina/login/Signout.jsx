import React from 'react'
import { auth } from '../../servicio/firebase';
function Signout({setUser}) {
  const signout = ()=> {
    auth.signOut()
    .then(()=> setUser(null))
    .catch((err) => {
        console.error(err);
    });
  };
    return (
    <button onClick={signout} >Cerrar Seción</button>
    
    
  )
}

export default Signout