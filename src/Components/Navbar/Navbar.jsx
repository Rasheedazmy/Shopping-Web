import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CounterContext } from '../../Context/CounterContext';
import { UserContext } from '../../Context/UserContext';

export default function Navbar() {

  let {counter} = useContext(CounterContext);
  let navigate = useNavigate();
  let { userLogin , setUserLogin} = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  function logout() {
    localStorage.removeItem('userToken');
    setUserLogin(null);
    navigate('/login');
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50">
  <div className="max-w-8xl mx-auto flex justify-between items-center px-6 py-3">
    {/* Logo + Desktop Menu */}
    <div className="flex items-center gap-6">
      <h2 className="text-xl font-bold flex items-center">
        <span className="text-green-600 mr-1">🛒</span> FreshCart
      </h2>

      {/* Desktop Menu */}
      {userLogin !== null && (
        <div className="hidden md:flex items-center gap-4 ml-6">
          <Link to="/" className="text-gray-800 hover:text-green-600">Home</Link>
          <Link to="/cart" className="text-gray-800 hover:text-green-600">Cart</Link>
          <Link to="/Products" className="text-gray-800 hover:text-green-600">Products</Link>
          <Link to="/Brands" className="text-gray-800 hover:text-green-600">Brands</Link>
          <Link to="/Categories" className="text-gray-800 hover:text-green-600">Categories</Link>
        </div>
      )}
    </div>

    {/* Right Side: Login/Logout + Social */}
    <div className="flex items-center gap-4">
      {userLogin == null ? (
        <div className="hidden md:flex gap-4">
          <Link to="/login" className="text-gray-800 hover:text-green-600">Login</Link>
          <Link to="/Register" className="text-gray-800 hover:text-green-600">Register</Link>
        </div>
      ) : (
        <span onClick={logout} className="hidden md:block text-gray-800 hover:text-green-600 cursor-pointer">Logout</span>
      )}

      {/* Social Icons */}
      <div className="hidden md:flex gap-3 ml-4">
        <i className="fab fa-facebook-f text-gray-800 hover:text-green-600"></i>
        <i className="fab fa-twitter text-gray-800 hover:text-green-600"></i>
        <i className="fab fa-instagram text-gray-800 hover:text-green-600"></i>
        <i className="fab fa-tiktok text-gray-800 hover:text-green-600"></i>
        <i className="fab fa-youtube text-gray-800 hover:text-green-600"></i>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-gray-800 hover:text-green-600 focus:outline-none"
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden px-4 pt-2 pb-4 bg-gray-100 flex flex-col gap-2 shadow-md z-40">
      {userLogin !== null && (
        <>
          <Link to="/" className="text-gray-800 hover:text-green-600">Home</Link>
          <Link to="/cart" className="text-gray-800 hover:text-green-600">Cart</Link>
          <Link to="/Products" className="text-gray-800 hover:text-green-600">Products</Link>
          <Link to="/Brands" className="text-gray-800 hover:text-green-600">Brands</Link>
          <Link to="/Categories" className="text-gray-800 hover:text-green-600">Categories</Link>
        </>
      )}
      {userLogin == null ? (
        <>
          <Link to="/login" className="text-gray-800 hover:text-green-600">Login</Link>
          <Link to="/Register" className="text-gray-800 hover:text-green-600">Register</Link>
        </>
      ) : (
        <span onClick={logout} className="text-gray-800 hover:text-green-600 cursor-pointer">Logout</span>
      )}

      {/* Social Icons Mobile */}
      <div className="flex gap-3 mt-2">
        <i className="fab fa-facebook-f text-gray-800 hover:text-green-600"></i>
        <i className="fab fa-twitter text-gray-800 hover:text-green-600"></i>
        <i className="fab fa-instagram text-gray-800 hover:text-green-600"></i>
        <i className="fab fa-tiktok text-gray-800 hover:text-green-600"></i>
        <i className="fab fa-youtube text-gray-800 hover:text-green-600"></i>
      </div>
    </div>
  )}
</nav>

  );
}