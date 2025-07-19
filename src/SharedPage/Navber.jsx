import { useState } from 'react';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import img from '../../src/assets/download.png';
import { Link, NavLink } from 'react-router';
import resume from '/Abdul ali arafat.(Resume).pdf'
import Swal from 'sweetalert2';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:brightness-110 transition text-white px-4 py-2 rounded-md font-semibold shadow block'
            : 'text-gray-200 hover:text-white transition duration-300 px-4 py-2 block'
        }
        onClick={() => setIsOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/projectDetails"
        className={({ isActive }) =>
          isActive
            ? 'bg-gradient-to-r from-cyan-600 to-purple-700 hover:brightness-110 transition text-white px-4 py-2 rounded-md font-semibold shadow block'
            : 'text-gray-200 hover:text-white transition duration-300 px-4 py-2 block'
        }
        onClick={() => setIsOpen(false)}
      >
        Projects
      </NavLink>
      <NavLink
        to="/detailsContact"
        className={({ isActive }) =>
          isActive
            ? 'bg-gradient-to-r from-cyan-700 to-purple-700 hover:brightness-110 transition text-white px-4 py-2 rounded-md font-semibold shadow block'
            : 'text-gray-200 hover:text-white transition duration-300 px-4 py-2 block'
        }
        onClick={() => setIsOpen(false)}
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900 text-white shadow-2xl py-2 w-full z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center md:ml-10 gap-2">
          <img src={img} className="rounded-full w-12 shadow-2xl border-1 border-blue-600 hover:border-2" alt="Logo" />
          <p className="font-bold text-blue-200 text-2xl">Abdul ali arafat</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems}
          <a
            href="/Abdul ali arafat.(Resume).pdf"
            download
            onClick={() =>
              Swal.fire({
                title: 'Download Resume',
                background: '#6b21a8',  // Tailwind purple-700
                color: 'white',
                icon: 'success',
                showConfirmButton: false,
                timer: 1700,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.style.borderRadius = '12px'; // optional rounded corners
                }
              })
            }
            className="flex items-center gap-2 px-4 py-2 rounded-md text-white font-medium bg-gradient-to-r from-cyan-600 to-purple-700 hover:brightness-110 transition"
          >
            <FaDownload /> Resume
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 py-3 pb-4 bg-gradient-to-r from-indigo-950 via-purple-900 to-blue-900 text-white  space-y-2 sticky">
          {navItems}
          <a
            href={resume}
            download
            className="flex items-center btn gap-3 px-4 py-2 rounded-md text-white  font-medium bg-gradient-to-r from-cyan-600 to-purple-700 hover:brightness-110 transition"
          >
            <FaDownload /> Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
