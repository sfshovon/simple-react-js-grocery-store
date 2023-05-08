import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartDetails = ({cartInfo, removeItem}) => {
  return (
    <div className="border-2 border-zinc-800 mx-2 mb-2">
      <div>
        <h6 className="text-md md:text-lg text-center font-semibold">{cartInfo.title}</h6>
      </div>
      
      <div className="grid grid-cols-1 justify-center items-center gap-1 mx-2 md:flex md:justify-between md:gap-2 md:mx-1">
        <img src={cartInfo.pic} className="text-center w-20 h-20 rounded-full mb-1 mx-auto md:mx-0" alt="" />
        <h5 className="text-lg font-semibold"> ${cartInfo.price}</h5>
        <h5 className="text-lg font-semibold"> Qty: {cartInfo.quantity}</h5>
        <button 
          className="btn btn-sm btn-error px-2 py-1 my-1 rounded-full" 
          onClick={ () => removeItem(cartInfo.id)}> 
          <FontAwesomeIcon className=" hover:text-base-100" icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>

    </div>
  );
};

export default CartDetails;