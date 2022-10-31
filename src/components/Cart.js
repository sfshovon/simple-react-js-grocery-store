import { deleteShoppingCart, removeFromDb } from '../utilities/localStorage';
import CartDetails from './CartDetails';

const Cart = ({cart, setCart}) => {

  const removeItem = (removeProduct) =>{
    const remaining = cart.filter(cartProduct => cartProduct.id !== removeProduct);
    removeFromDb(removeProduct);
    setCart(remaining);
  }

  const clearAll = () => {
    deleteShoppingCart()
    setCart([]);
  }
 
  let total = 0;
  let quantity = 0;

  for(const product of cart){
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
  }
  
  const tax = (total * 0.05);
  const grandTotal = (total + tax);

  return (
    <div className="sticky top-0">
      <h1 className="text-2xl text-center font-bold mx-5 my-5 lg:text-3xl">Order Summary</h1>
      <div>
        <h2 className="text-xl text-justify font-semibold mt-10 mb-2 px-4">Selected Items: {quantity}</h2>
        {
          cart.map(cartInfo => 
            <CartDetails 
              cartInfo = {cartInfo} 
              key = {cartInfo.id}
              removeItem = {removeItem}>
            </CartDetails>
          )
        }
        <h3 className="text-lg text-justify font-semibold mb-2 mt-2 px-4"> Total Price: ${total.toFixed(2)}</h3>
        <h3 className="text-lg text-justify font-semibold mb-2 px-4"> Tax: ${tax.toFixed(2)}</h3>
        <h3 className="text-lg text-justify font-semibold mb-2 px-4"> Grand Total: ${grandTotal.toFixed(2)}</h3>
      </div>
      {
        cart[0] && <button className="btn btn-accent"  onClick={ () => {clearAll()}}> Clear All </button>
      }     
    </div>
  );
};

export default Cart;