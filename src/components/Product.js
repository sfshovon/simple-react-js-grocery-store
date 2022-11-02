import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Product = ({product, addToCart}) => {
  const {pic, title, price, description} = product;
  return (
    <div className="card card-compact w-48 bg-base-200 shadow-lg mb-3 md:mx-2 lg:w-80 md:w-72">
      <figure>
        <img src={pic} className="rounded-xl h-56 w-64 p-5" alt="Product"/>
      </figure>
      <div className="card-body text-justify">
        <h2 className="card-title h-7 font-bold">{title}</h2>
        <div className="mt-5">
          <h3 className="text-lg font-semibold">Price: ${price}</h3>
        </div>
        <div className="h-20">
          <p>{description.slice(0,100)}</p>
        </div>
        <button className="text-lg items-center footer btn bottom-0 mt-5" onClick={ () => addToCart(product)}>Add to Cart 
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button> 
      </div>
    </div>
  );
};

export default Product;