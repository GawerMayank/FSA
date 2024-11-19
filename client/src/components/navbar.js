import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./logo";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();

  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token !== null; // Check if token exists
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token
    toast.success("Logout success", {
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate("/");
    }, 1000); // Redirect to login page
  };

  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4">
      <div className="text-white text-xl">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="space-x-4">
        {isAuthenticated() ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                Signup
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
