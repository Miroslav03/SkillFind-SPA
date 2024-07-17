import React from "react";

export default function Navbar() {
  return (
    <div className="bg-black h-16 flex items-center justify-between text-white px-6 text-xl font-rubik">
      <div>Logo</div>
      <nav className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Catalog</a>
      </nav>
      <nav className="flex gap-4">
        <a
          href="#"
          className="hover:text-blue-600 transition-all hover:rounded-lg hover:p-1 hover:bg-white p-1 "
        >
          Log In
        </a>
        <a href="#" className="hover:text-blue-600 transition-all p-1">
          Register
        </a>
      </nav>
    </div>
  );
}
