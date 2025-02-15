import { Link } from "react-router-dom";
import { IoSunnyOutline } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full bg-white fixed top-0 left-0 px-6 py-4 shadow-lg z-999">
        <Link to="/">
          <h1 className="font-bold text-4xl font-serif">Shoe Hub</h1>
        </Link>

        <ul className="flex items-center justify-between gap-6 font-semibold text-2xl">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/products">
            <li>All Products</li>
          </Link>
          <Link to='/contact'>
            <li>Contact</li>
          </Link>
        </ul>
        <div className="flex items-center justify-between gap-6 font-semibold text-2xl">
          <button>
            <IoSunnyOutline />
          </button>
          <Link to='/cart'>
          <button className="relative mr-5">
            <FaShoppingBag />
            <span className="bg-[#E53E3E] text-white rounded-full px-2 text-sm py-1 absolute -top-4 left-6">
              0
            </span>
          </button>
          </Link>
          <Link to='/login'>
          <button className="bg-blue-500 text-white px-4 py-2 text-lg rounded-2xl hover:cursor-pointer hover:bg-blue-600">
            Login
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
