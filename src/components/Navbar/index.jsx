import React, { useState, useEffect } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  console.log(location);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` shadow-lg fixed w-full top-0 z-50 transition-all duration-1000 ease-in-out ${
        scrolled
          ? "bg-[linear-gradient(to_right,#8526e2,#64c2b1)] duration-1000"
          : "bg-[linear-gradient(to_right,#ff3951,#ff7b72)]"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between flex-row-reverse md:flex-row items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-rubikRegular text-white uppercase">
              Servicesnap
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className={`${
                location.pathname == "/" ? "text-white" : ""
              } "text-black text-2xl font-rubikRegular hover:text-white"`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                location.pathname == "/about" ? "text-white" : ""
              } "text-black text-2xl font-rubikRegular hover:text-white"`}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`${
                location.pathname == "/blog" ? "text-white" : ""
              } "text-black text-2xl font-rubikRegular hover:text-white"`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`${
                location.pathname == "/contact" ? "text-white" : ""
              } "text-black text-2xl font-rubikRegular hover:text-white"`}
            >
              Contact
            </Link>

            <Link to="/register">
              <button
                className={`${
                  scrolled
                    ? "bg-[linear-gradient(to_right,#ff3951,#ff7b72)]"
                    : "bg-[linear-gradient(to_right,#8526e2,#64c2b1)] "
                } px-4 py-2 font-rubikMedium text-lg text-center text-white rounded-md inline-block `}
              >
                Become a Service provider
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <HiMiniBars3BottomLeft
              className="text-white text-3xl"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu with Slide-in Animation */}
      <div
        className={`fixed inset-0 left-0 w-[80%] bg-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="flex justify-between p-4">
          <div>
            <h1 className="text-2xl uppercase font-rubikRegular text-[#f55a34]">
              Servicesnap
            </h1>
          </div>
          <RxCross2
            className="text-3xl bg-[linear-gradient(to_right,#ff3951,#ff7b72)] text-white rounded-md"
            onClick={toggleMenu}
          />
        </div>
        <div className="py-2" onClick={toggleMenu}>
          <Link
            to="/"
            className={`${
              location.pathname == "/" ? "text-primary bg-gray-100" : ""
            } "text-black text-xl font-rubikRegular  block text-gray-800  px-3 py-2 rounded-md border-b-2  font-rubikRegular"`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              location.pathname == "/about" ? "text-primary bg-gray-100" : ""
            } "text-black text-xl font-rubikRegular  block text-gray-800  px-3 py-2 rounded-md border-b-2  font-rubikRegular"`}
          >
            About
          </Link>
          <Link
            to="/blog"
            className={`${
              location.pathname == "/blog" ? "text-primary bg-gray-100" : ""
            } "text-black text-xl font-rubikRegular  block text-gray-800  px-3 py-2 rounded-md border-b-2  font-rubikRegular"`}
          >
            Services
          </Link>
          <Link
            to="contact"
            className={`${
              location.pathname == "/contact" ? "text-primary bg-gray-100" : ""
            } "text-black text-xl font-rubikRegular  block text-gray-800  px-3 py-2 rounded-md border-b-2  font-rubikRegular"`}
          >
            Contact
          </Link>
          <Link to="/register">
            <button className="px-4 py-2 font-rubikMedium w-full  mt-6 text-lg text-center text-white bg-primary rounded-md inline-block ">
              Become a Service provider
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay for closing the mobile menu when clicked outside */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
