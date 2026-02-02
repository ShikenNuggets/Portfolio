"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && hash === "contact") {
        setModalOpen(true);
      } else {
        setModalOpen(false);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const openModal = () => {
    window.location.hash = "contact";
    setModalOpen(true);
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    history.replaceState(null, "", " ");
    setModalOpen(false);
  };

  return (
    <>
      <nav className="w-full fixed-top px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 navbar">
        <Link href="/" style={{ textDecoration: "none" }}>
          <h1>Games by Carter</h1>
        </Link>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          <li>
            <h1>
              <Link href="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </h1>
          </li>
          <li>
            <h1>
              <Link href="/about" style={{ textDecoration: "none" }}>
                About Me
              </Link>
            </h1>
          </li>
        </ul>

        <div className="flex items-center">
          <a
            className="navbar-contact-modal hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 cursor-pointer"
            style={{ textDecoration: "none" }}
            onClick={openModal}
          >
            <h1>Contact</h1>
          </a>

          <button 
            className="md:hidden flex flex-col gap-1.5 ml-4" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`h-0.5 w-6 bg-current transform transition ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-current transition ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-current transform transition ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
        {modalOpen && true && true && <ContactModal onClose={closeModal} />}
        {isMenuOpen && (
          <div className="fixed top-[70px] left-0 w-full bg-white !backdrop-blur-2xl border-b border-gray-200 flex flex-col items-center py-8 gap-6 md:hidden z-50 shadow-lg navbar">
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              style={{ textDecoration: "none" }}
            >
              <h1 className="text-lg">Home</h1>
            </Link>
            
            <Link 
              href="/about" 
              onClick={() => setIsMenuOpen(false)}
              style={{ textDecoration: "none" }}
            >
              <h1 className="text-lg">About Me</h1>
            </Link>

            <a 
              onClick={openModal} 
              className="cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              <h1 className="text-lg">Contact</h1>
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
