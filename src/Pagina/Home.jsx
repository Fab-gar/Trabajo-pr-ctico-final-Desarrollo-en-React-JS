
import React,{ useContext } from 'react'
import Navbar from '../componente/navbar';
import { productContex } from '../contexto/prodContex';
import Register from './login/Register';
import Signup from './login/Signup';
import { auth } from '../servicio/firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Signout from './login/Signout';


 function Home () {
  const {message} =useContext(productContex);


  const [user, setUser ] = useState(null);
  useEffect(()=>{
onAuthStateChanged(auth,(user)=>{
  if (user){
    setUser(user.email);
  }
});
  },[])


  return (
    <>
    <header>
        <h1 className='titulo'>eCommerse</h1>
        <Navbar/>
        
        </header>
        {!user ? (<> 
       <Register/>
        <Signup setUser={setUser}/>
        </> ) : (<>
        <h3 style={{fontSize:'35px'}}>Bienvenido!!</h3>
      <Signout setUser={setUser}/>
         </>
        )}
    
        <h2>{message}</h2> 
     </>
  );
}
export default Home
