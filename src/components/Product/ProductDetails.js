import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProductDetails = ({product, addToCart}) => {
  const {pic, title, price, description} = product;
  return (
    <div className="card card-compact bg-base-200 shadow-lg mb-3 md:mx-2 lg:w-80 md:w-72">
      <figure>
        <img src={pic} className="rounded-full md:rounded-2xl h-56 w-full object-cover p-5" alt="Product"/>
      </figure>
      <div className="card-body text-justify p-5">
        <h2 className="card-title h-7 font-bold">{title}</h2>
        <div className="mt-5">
          <h3 className="text-lg font-semibold">Price: ${price}</h3>
        </div>
        <div className="h-20">
          <p>{description.slice(0,100)}</p>
        </div>
        <button className="btn bg-orange-300 text-black text-sm md:text-lg mt-5 hover:bg-slate-400 w-auto" onClick={ () => addToCart(product)}>Add to Cart 
          <FontAwesomeIcon icon={faShoppingCart} className="ml-3"></FontAwesomeIcon>
        </button> 
      </div>
    </div>
  );
};

export default ProductDetails;