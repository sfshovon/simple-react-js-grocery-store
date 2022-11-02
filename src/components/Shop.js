import useProducts from '../customHooks/useProducts';
import useCart from '../customHooks/useCart';
import { addToDb } from '../utilities/localStorage';

import Cart from './Cart';
import Product from './Product';

const Shop = () => {

  const shopStyle = {
    display: "grid",
    gridTemplateColumns: "1.5fr 4fr"
  }

  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const addToCart = (selectedProduct) => {
    let newCart = [];
    const productExists = cart.find(cartProduct => cartProduct.id === selectedProduct.id);
    
    if(!productExists){
      selectedProduct.quantity = 1;
      newCart = [...cart,selectedProduct];
    }
    else{
      const remaining = cart.filter(cartProduct => cartProduct.id !== selectedProduct.id)
      productExists.quantity = productExists.quantity + 1;
      newCart = [...remaining,productExists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id)
  };

  return (
    
    <div style={shopStyle}> {/* Full Shop Container */}

      <div className="bg-emerald-100">  {/* Order Container */}
        <Cart setCart={setCart} cart={cart}>
          <h3 className="text-2xl text-center text dark">Inside Shop</h3>
        </Cart>
      </div>
      
      <div> {/* Product Container */}
          <div className="flex justify-around">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 my-10 lg:gap-4">
            {
              products.map(product => 
                <Product 
                  product={product} 
                  addToCart={addToCart} 
                  key={product.id}>
                </Product>
              )
            }
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Shop;