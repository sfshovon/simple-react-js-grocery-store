import useCart from '../../customHooks/useCart';
import useProducts from '../../customHooks/useProducts';
import { addToDb } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import ProductDetails from './ProductDetails';

const Shop = () => {
  const shopStyle = {
    display: "grid",
    gridTemplateColumns: "1.5fr 4fr"
  }

  const [products ] = useProducts();
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

      <div className="bg-green-50 border-solid border-r-2 border-zinc-900">  {/* Order Container */}
        <Cart setCart={setCart} cart={cart}>
          <h3 className="text-2xl text-center text dark">Inside Shop</h3>
        </Cart>
      </div>
      
      <div className="bg-sky-50"> {/* Product Container */}
          <div className="flex justify-around">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 my-10 lg:gap-4">
            {
              products.map(product => 
                <ProductDetails 
                  product={product} 
                  addToCart={addToCart} 
                  key={product.id}>
                </ProductDetails>
              )
            }
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Shop;