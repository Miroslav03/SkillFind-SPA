import React, { useEffect } from "react";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function Navbar() {
    const { isAuthenticated, name, title, logout, isClient, isFreelancer, id } =
        useAuthContext();

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
                        className="menu menu-sm dropdown-content bg-main-text-color border-main-yellow-color border-[2px] rounded-sm z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a>Find Client</a>
                        </li>
                        <li>
                            <a>Find Freelancer</a>
                        </li>
                        <li>
                            <Link to="/catalog">Catalog</Link>
                            <ul className="p-2">
                                <li>
                                    <a>Development</a>
                                </li>
                                <li>
                                    <a>AI Services</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Profile</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl text-main-text-color">
                    SkillFind
                </a>
            </div>
            <div className="navbar-center flex sm:hidden">
                <ul className="menu menu-horizontal px-1 text-main-text-color font-semibold">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a>Find Client</a>
                    </li>
                    <li>
                        <a>Find Freelancer</a>
                    </li>
                    <li>
                        <details>
                            <summary>
                                <Link to="/catalog">Catalog</Link>
                            </summary>
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
                    {isClient && (
                        <li>
                            <Link to={`/profile/client/${id}`}>Profile</Link>
                        </li>
                    )}
                    {isFreelancer && (
                        <li>
                            <Link to={`/profile/freelancer/${id}`}>
                                Profile
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className="navbar-end flex gap-2 items-center">
                {!isAuthenticated && (
                    <>
                        <Link to="/auth/login">
                            <Button label={"Log In"} px="px-4" py="py-2" />
                        </Link>
                        <Link to="/choose/register">
                            <Button label={"Register"} px="px-4" py="py-2" />
                        </Link>
                    </>
                )}
                {isAuthenticated && (
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center">
                            <h3 className="text-main-text-color text-md font-bold">
                                {name}
                            </h3>
                            <p className="text-main-yellow-color text-sm font-semibold">
                                {title}
                            </p>
                        </div>
                        <div onClick={logout}>
                            <Button label={"Log out"} px="px-4" py="py-2" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
