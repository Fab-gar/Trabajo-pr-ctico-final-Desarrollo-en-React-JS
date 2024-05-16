import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../servicio/firebase'; 
function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password}= e.target.elements;
        createUserWithEmailAndPassword(auth,email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user.email;
            console.log(user)
        })
        .catch((err) => {
            const errorCode = err.code
            const errorMessage =err.message
            console.error(errorCode);
            console.error(errorMessage);
        });
    }
  return (
    <> 
    <form className='registrar' onSubmit={handleSubmit}>
       <p>Registrate Gratis aqui</p>
       <label htmlFor="name">Nombre:
       <input type="text" name='name' id='name'/> </label>

            <label htmlFor='apellido'>Apellido:
            <input name='lastName' id='apellido' type="text" 
              />
        </label>
        <label> Email
            <input type="text" name='email'/>
        </label>
        <label >Contraseña
            <input type="password" name='password'/>

        </label>
        <p></p>
        <button type='submit'>Registrar</button>
    </form>
    </>
  )
};

export default Register