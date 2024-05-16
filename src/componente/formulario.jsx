import { useForm } from 'react-hook-form';
import Register from '../Pagina/login/Register';
function Formu(){
const {register, handleSubmit, formState: {errors}, watch, setValue, reset,}
= useForm({defaultValues:{
name: '',
email:'',
password:'',}
});
const onSubmit = handleSubmit((data)=>{
    alert(JSON.stringify(data, null, 2));
  reset();
}) 
return(
<div className='formu'>
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="name">Nombre:
            <input className="input" type="text" name='name' id='name' 
            {...register('name',
        {required:{value:true,message:"Nombre requerido...,"},
        maxLength:30,
        minLength:2,
        })}
        /> </label>
        {errors.name?.type === 'requerido' && (
         <span> {errors.name?.message} </span>)} 
            
     {errors.name?.type === 'minLength' &&(
        <span style={{color:'#9f0d08b9'}}> 2 caracteristicas al menos </span>)} 
            
            {errors.name?.type === 'maxLength' &&(
            <span style={{color:'#9f0d08b9'}}> 15 characters max </span>)}
      <div>  
        <label htmlFor='apellido'>Apellido:
            <input className="input" name='Apellido' id='apellido' type="text" 
             {...register('apellido',
             {required:{value:true,message:"Apellido requerido...,"},
             maxLength:15,
             minLength:6,
             })} />
        </label>
        {errors.apellido?.type === 'requerido' && (
         <span> {errors.apellido?.message} </span>)} 
            
     {errors.apellido?.type === 'minLength' &&(
        <span style={{color:'#9f0d08b9'}} > 6 caracteristicas al menos </span>)} 
            
            {errors.apellido?.type === 'maxLength' &&(
            <span> 15 characters max </span>)}
</div>




            
    <div>
  <label htmlFor="email">Email:
  <input className="input"
  type="text"
  name='email'
  id='email'
  {...register('email',{
    required: {
      value: true,
      message: 'a valid emaild must be provided',
    },
    pattern:{
      value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z)-9.-]+$/,
      message:'FORMATO DEL EMAIL NO ES VALIDO',
    }
  })} /> </label>

  {errors.password && (
<span> {errors.password.message} </span>)}

</div> 
<div>
  <label htmlFor="password">Contraseña:
  <input className="input"
  name='Contraseña'
  id='password'
  {...register('password',{
    required: {
      value: true,
      message: 'Contraseña requerida',
    },

    minLength:{
      value:8,
      message: 'min letras 8',
      validate: (value) =>{
value === password.current;

      },
    }
  })} /> </label>

  {errors.password && (
<span> {errors.password.message} </span>)}

</div>

    </div>
       <Register/> 
    </form>
    </div>)}
export default Formu