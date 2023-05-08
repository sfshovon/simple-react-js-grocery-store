import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="flex items-center min-h-screen p-16 bg-gray-200">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
          <Link rel="noopener noreferrer" to="/" className="mt-10 btn px-8 py-3 font-semibold rounded dark:bg-violet-400">Back to homepage</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;