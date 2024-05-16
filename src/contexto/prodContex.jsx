import React, {useState, useEffect, createContext, } from "react";
import { getAllProd, getCarr} from '../servicio/productServ';
import { inisialProduct } from "../servicio/productServ";
import { auth } from "../servicio/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const productContex = createContext([inisialProduct]);

export const ProductsContextProvider = ({children}) => {
    const [producto, setProducto] = useState([]);
    
    const [isLoading, setIsLoading]= useState(true);
    const [carrito, setCarr]= useState(getCarr());
    const [error, setError]= useState(null);
   const [sortedMaxToMin, setSortedMaxToMin] = useState(false);
   const[maxPrice, setMaxPrice] = useState(1000);
   const [query, setQuery] = useState('');
   
   const handleSort = ()=>{
    if(sortedMaxToMin){
        const sortedProducts = producto.toSorted((a, b)=> a.price - b.price);
        setProducto(sortedProducts);
    } else{
        const sortedProducts = producto.toSorted((a, b)=> b.price - a.price);
        setProducto(sortedProducts);
    }
    setSortedMaxToMin(!sortedMaxToMin);

   }
   const handleMaxPrice =(price) =>setMaxPrice(price);
   const handleQuery =(searchTerm) =>setQuery(searchTerm);





   const addToCarrito = (prod) => {
setCarr((prevValue) =>[prevValue, prod]);};
window.localStorage.setItem('carro', JSON.stringify(carrito))



const [user, setUser ] = useState(null);
  useEffect(()=>{
onAuthStateChanged(auth,(user)=>{
  if (user){
    setUser(user.email);
  }
});
  },[])







const removedFromCarr = (id) => {
setCarr(carrito.filter((item) => item.id !==id));
};

    const fetchData = async () => {
        try {
            setError(null);
            setIsLoading(true);
            const data = await getAllProd();
            setProducto (data);
        } catch (err) {
            console.error(err);
            setError(err.message);
        }  finally{
            setIsLoading(false);
        }

    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <productContex.Provider value ={{
         producto, 
         carrito,
        isLoading,
        maxPrice,
         error, 
         handleMaxPrice, 
         sortedMaxToMin, 
         handleSort,
         handleQuery,
         query,
         removedFromCarr,
         addToCarrito,
         }}>
           {children}
        </productContex.Provider>
    );
};