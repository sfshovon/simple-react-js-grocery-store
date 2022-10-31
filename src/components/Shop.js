import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../utilities/localStorage';
import Cart from './Cart';
import Product from './Product';

const Shop = () => {

  const shopStyle = {
    display: "grid",
    gridTemplateColumns: "4fr 1fr"
  }

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect( () => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

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

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for(const id in storedCart){
      const addedProduct = products.find(product=> product.id === id);

      if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
  

  return (
    
    <div style={shopStyle}> {/* Full Shop Container */}
      
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
     
      <div className="bg-emerald-100">  {/* Order Container */}
        <Cart setCart={setCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;