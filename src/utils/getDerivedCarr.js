export const getDerivedCarr = (carr = [] ) => {
const derivedCarr = [];
carr.forEach((item) => {
const existingItem = derivedCarr.find((dItem) => dItem.id === item.id);
    if (existingItem){
        existingItem.quantity++;
        existingItem.totalPrice += item.price
  } else {
            derivedCarr.push({
                id: item.id,
                name: item.title,
               quantity: 1,
               totalPrice: item.price,
            });
        }
    });
return derivedCarr;
};