import React from "react";

const Navbar = () => {
  return (
    <header className="relative">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-3 py-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex justify-start lg:flex-1">
          <a href="#" className="flex gap-2 z-20">
            <a className="font-semibold text-xl mr-5">Landguru</a>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 z-20">
          <a href="#" className="font-semibold text-sm">
            Home
          </a>
          <a href="#" className="font-semibold text-sm">
            Advertise
          </a>
          <a href="#" className="font-semibold text-sm">
            Support
          </a>
          <a href="#" className="font-semibold text-sm">
            Contact
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="bg-orange-100 text-orange-300 px-6 py-2 rounded-md">
            <p>Try for free</p>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
