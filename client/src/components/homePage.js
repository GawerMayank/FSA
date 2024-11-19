import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center bg-blue-600 text-white py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to FSA</h1>
        <p className="text-lg mb-6">
          Your go-to solution for financial management.
        </p>
        <Link to="/signup">
          <button className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-200 transition">
            Get Started
          </button>
        </Link>
        <Link to="/users">
          <button className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-200 transition mt-2">
            Users
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to take control of your finances?
        </h2>
        <Link to="/signup">
          <button className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-200 transition">
            Sign Up Now
          </button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
