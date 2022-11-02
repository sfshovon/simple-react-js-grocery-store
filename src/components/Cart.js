import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
 
  let total = 0;
  let quantity = 0;

  for(const product of cart){
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
  }
  
  const vat = (total * 0.05);
  const grandTotal = (total + vat);

  
  return (
    <div className="sticky top-0">
      { 
        (quantity !== 0) && <h1 className="text-2xl text-center font-bold mx-5 mt-5 lg:text-3xl">Review Order</h1>
      }
      {
        (quantity === 0) 
        ? <h1 className="text-2xl text-center font-bold mx-5 mt-10 animate-pulse lg:text-3xl">Please Add Items</h1>
        : <div>
            <div>
              <h2 className="text-xl text-justify font-semibold mt-10 mb-2 px-4">Items Chosen: {quantity}</h2>
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
              <h3 className="text-lg text-justify font-semibold mb-2 px-4"> Vat: ${vat.toFixed(2)}</h3>
              <h3 className="text-lg text-justify font-semibold mb-2 px-4"> Grand Total: ${grandTotal.toFixed(2)}</h3>
              </div>

              <div className="flex justify-center items-center gap-5">
              {
                cart[0] && <button className="btn btn-accent w-2/5"  onClick={ () => clearAll()}> Clear All </button>
              }
              {
                cart[0] && <button className="btn btn-warning w-2/5" onClick={ () => navigate('/thankyou')}> Proceed Checkout </button>
              }
              </div>  
          </div>
      }
    </div>
  );
};

export default Cart;