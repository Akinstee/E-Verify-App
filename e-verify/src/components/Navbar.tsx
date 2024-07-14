'use client'
import { Menu, X } from "lucide-react";
import { useState } from "react";
// import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const navItems = [
    { label: "Home", href: "/" },
    { label: "Verify", href: "/worker-verification" },
    { label: "About us", href: "/about-us" },
    { label: "Jobs", href: "/jobs" },
    { label: "FAQ", href: "/faq" },
  ];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky bg-transparent text-black top-0 z-50 py-3 backdrop-blur-lg">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 gap-2">
            {/* <img className="h-7 w-7 mr-2" src='/logo.png' alt="Logo" /> */}
            <span className="text-2xl font-bold tracking-tight">Logo</span>
          </div>
          <ul className="hidden text-[16px] lg:flex ml-14 space-x-20">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex text-[16px] justify-center text-lg space-x-12 items-center">
            <Link to="/WorkerSignIn" className="py-2 px-3 border rounded-md">
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-red-500 text-white py-2 px-3 rounded-md"
            >
              Create an account
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white text-black w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
