import React from 'react';
import useProducts from '../../customHooks/useProducts';
import AboutExpand from './AboutExpand';

const About = () => {
  const [products] = useProducts();
  return (
    <div className="flex justify-evenly bg-green-50">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-10 lg:gap-4">
        {
          products.map(product => 
          <AboutExpand
            product={product} 
            key={product.id}>
          </AboutExpand>
          )
        }
      </div>
    </div>
  );
};

export default About;