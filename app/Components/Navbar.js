"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PrimaryBtn from "./PrimaryBtn";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Components/About", label: "About" },
    { href: "/Components/Products", label: "Products" },
    { href: "/Components/Contact", label: "Contact" },
  ];

  const NavLink = ({ href, label, isMobile }) => (
    <Link
      href={href}
      className={`
          relative overflow-hidden 
          ${
            isMobile
              ? "block px-3 py-3 mt-6 mx-3  rounded-md text-base font-normal font-outfit transition-colors duration-300 ease-in-out" // Increased mobile padding
              : "text-charcoal px-3  hover:bg-blue-100 rounded-md hover:text-charcoal transition-colors duration-300 py-2" // Increased desktop padding
          } 
          ${
            pathname === href
              ? isMobile
                ? "bg-secondary-blue text-white"
                : "font-normal border-b-[2px] rounded-none px-1 border-charcoal"

              : ""
          }
        `}
      onClick={() => isMobile && setIsOpen(false)}
    >
      <span className="relative z-10">{label}</span>
      {!isMobile && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-blue transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
      )}
    </Link>
  );

  return (
    <>
      <nav className="fixed w-full z-50 font-light bg-white shadow-md font-outfit py-5">
        <div className="max-w-7xl mx-auto px-6 tablet:px-16  desktop:px-26">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="flex-shrink-0 transition-transform duration-300 hover:scale-105 "
            >
              <Image
                src="/Logo.svg" // Path to your logo in the public folder
                alt="Your Company Logo"
                width={50} // Adjust width as needed
                height={0} // Adjust height as needed
                priority // Optional: Prioritizes loading
              />
            </Link>

            <div className="hidden desktop:flex items-center justify-center flex-grow">
              {navLinks.map((link) => (
                <div key={link.href} className="mx-4">
                  <NavLink {...link} />
                </div>
              ))}
            </div>

            <div className="hidden desktop:block">
              <PrimaryBtn href="/signin">ORDER NOW</PrimaryBtn>
            </div>

            <div className="flex items-center desktop:hidden">
              <div className="mr-5">
                <PrimaryBtn href="/signin">ORDER NOW</PrimaryBtn>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-charcoal focus:outline-none transition-transform duration-300 hover:scale-110"
              >
                <span className="sr-only">
                  {isOpen ? "Close menu" : "Open menu"}
                </span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`
            desktop:hidden overflow-hidden transition-all duration-300 ease-in-out 
            ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} 
          `}
        >
          <div className="px-2 pt-4 pb-5 space-y-2 bg-white shadow-lg">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} isMobile />
            ))}
          </div>
        </div>
      </nav>
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
