import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../servicio/firebase"; 
import { useState } from "react";

function Signup({setUser}) {
    const [error, setError]= useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        signInWithEmailAndPassword(auth,email.value, password.value)
        .then((userCredential) => {
            setUser(userCredential.user.email);
            setError(null);
        })
        .catch((err) => {
            const errorCode = err.code;
            const errorMessage =err.message;
            console.error(errorCode);
            setError("Segui intentando amigoo!");
        });
    };
  return (
    <>
    <form className="ingresar" onSubmit={handleSubmit}>
       <p>Soy Usuario</p>
        <label>
            Email:
            <input type="text" name='email'/>
        </label>
        <label >Password:
            <input type="password" name='password'/>

        </label>
        <p className="errinp">{error}</p>
        <button type='submit'>Ingresar</button>
    </form>
    </>
  );
}

export default Signup;