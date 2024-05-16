
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './Pagina/Home';
import Producto from './Pagina/Producto';
import { ProductsContextProvider } from './contexto/prodContex';
import Carrito from './componente/Carrito';

function App() {
 

  return (
    <BrowserRouter>
    <ProductsContextProvider>
    <Routes>
      <Route path='/'element={<Inicio/>} />
      <Route path='/carrito'element={<Carrito/>} />
      <Route path='/Producto'element={<Producto/>} />
     </Routes>
     </ProductsContextProvider>
    </BrowserRouter>
    
  );
}

export default App;
