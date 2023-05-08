import React from 'react';

const AboutExpand = ({product}) => {
  return (
    <div className="card card-compact w-48 bg-base-100 shadow-xl lg:w-80 md:w-72 image-full">
      <figure><img src={product.pic} className="w-full" alt="Product" /></figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="text-justify font-semibold">{product.description}</p>
      </div>
    </div>
  );
};

export default AboutExpand;