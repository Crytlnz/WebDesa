import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#FFEB3B] to-[#FFF9C4] text-gray-900 p-4 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo Desa" className="h-12 w-auto" />
          <div className="ml-3">
            <div className="text-2xl font-bold">Desa Sukataris</div>
            <div className="text-sm font-medium">Kab. Cianjur</div>
          </div>
        </div>

        <button
          className="block md:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <nav className="hidden md:flex items-center gap-x-5">
          <ul className="flex gap-x-5">
            <li>
              <button
                onClick={() => scrollToSection(refs.homeRef)}
                className="hover:text-gray-700 hover:underline"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.apparatusRef)}
                className="hover:text-gray-700 hover:underline"
              >
                Aparat Desa
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.newsRef)}
                className="hover:text-gray-700 hover:underline"
              >
                Berita Desa
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.marketRef)}
                className="hover:text-gray-700 hover:underline"
              >
                UMKM Desa
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.activitiesRef)}
                className="hover:text-gray-700 hover:underline"
              >
                Kegiatan Desa
              </button>
            </li>
          </ul>
          {/* Tombol Login */}
          <a
            href="https://kawal-desa.lskk.co.id/login"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </a>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-y-4 py-4">
            <li>
              <button
                onClick={() => {
                  scrollToSection(refs.homeRef);
                  toggleMenu();
                }}
                className="hover:text-gray-700 hover:underline"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection(refs.apparatusRef);
                  toggleMenu();
                }}
                className="hover:text-gray-700 hover:underline"
              >
                Aparat Desa
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection(refs.newsRef);
                  toggleMenu();
                }}
                className="hover:text-gray-700 hover:underline"
              >
                Berita Desa
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection(refs.marketRef);
                  toggleMenu();
                }}
                className="hover:text-gray-700 hover:underline"
              >
                UMKM Desa
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection(refs.activitiesRef);
                  toggleMenu();
                }}
                className="hover:text-gray-700 hover:underline"
              >
                Kegiatan Desa
              </button>
            </li>
            {/* Tombol Login di Menu Mobile */}
            <li>
              <a
                href="https://kawal-desa.lskk.co.id/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
