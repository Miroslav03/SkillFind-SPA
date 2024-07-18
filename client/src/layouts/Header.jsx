import React from "react";
import Button from "../components/ui/Button";

export default function Navbar() {
  return (
    <div className="navbar bg-main-background-color hover:bg-[#eaeaea] transition-all">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost hidden sm:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl text-main-text-color">SkillFind</a>
      </div>
      <div className="navbar-center flex sm:hidden">
        <ul className="menu menu-horizontal px-1 text-main-text-color font-semibold">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary>Categories</summary>
              <ul className="p-2 rounded-sm bg-main-yellow-color text-white">
                <li className="hover:bg-main-text-color transition-all">
                  <a>Development</a>
                </li>
                <li className="hover:bg-main-text-color transition-all">
                  <a>AI Services</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Jobs</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <Button label={"Log In"} />
        <Button label={"Register"} />
      </div>
    </div>
  );
}
