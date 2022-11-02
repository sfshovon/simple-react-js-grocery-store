import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-10 font-extrabold text-5xl dark:text-gray-600">
            <span className="sr-only"></span>Congratulations
          </h2>
          <p className="text-2xl font-semibold md:text-2xl">Thank you for purchasing from us</p>
          <Link rel="noopener noreferrer" to="/" className="btn btn-success mt-10 px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Go Back To Shop</Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;