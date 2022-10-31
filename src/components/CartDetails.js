import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartDetails = ({cartInfo, removeItem}) => {
  return (
    <div className="grid grid-cols-1 justify-center items-center gap-1 mx-2 my-1 border-b border-zinc-800 md:flex md:justify-between md:gap-2 md:mx-1">
      <img src={cartInfo.pic} className="text-center w-14 h-14 rounded-full mb-1 mx-auto md:mx-0" alt="" />
      <h5 className="text-lg font-semibold"> ${cartInfo.price}</h5>
        <h5 className="text-lg font-semibold"> Qunatity: {cartInfo.quantity}</h5>
        <button 
          className="btn btn-sm btn-error px-2 py-1 my-1" 
          onClick={ () => removeItem(cartInfo.id)}> 
          <FontAwesomeIcon  className=" hover:text-base-100" icon={faTrash}></FontAwesomeIcon>
        </button>
    </div>
  );
};

export default CartDetails;