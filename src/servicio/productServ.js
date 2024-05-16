export const getAllProd = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Response not ok");
const data = await res.json();
return data;

};



export const getCarr = () => {
    const storedCart = window.localStorage.getItem('carr');
    const parsedCart = JSON.parse(storedCart);
    return parsedCart;
};

export const inisialProduct = {
    id:0,
      title:'',
      price:'',
      category:'',
     description:'',
     image:'',
     
};
export const getCartFromStorage = () => {
    const storedCart = window.localStorage.getItem("cart");
    const cart = JSON.parse(storedCart);
    return cart ? cart : [];
  };