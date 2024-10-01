"use client";

import { Avatar, Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import avatar from "../../src/assets/images/download.JPG";
export function SideNav() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-example"
          data-drawer-show="drawer-example"
          aria-controls="drawer-example"
        >
          <FiAlignJustify fontSize={40} />
        </button>
      </div>

      <div
        id="drawer-example"
        className="fixed top-0 left-0 flex gap-3 flex-col  items-center z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full  lg:translate-x-0 bg-white w-80 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <img
          src={avatar}
          className="w-32 h-32 rounded-full"
          alt="avatar of Jese"
        />
        <h2 className="font-bold test-lg">Mahmoud ALkenzy</h2>
        <p>UI/UX/Designer in Philippines</p>
        <ul className="list-none capitalize flex flex-col gap-4  w-full justify-center text-center">
          <li>
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="nav-link">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" className="nav-link">
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" className="nav-link">
              Work
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
