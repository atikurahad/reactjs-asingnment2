import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navList = (
        <>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold underline text-primary  text-sm"
                  : "text-sm  font-semibold"
              }
            >
              HOME
            </NavLink>
          </li>
         
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold  text-primary underline text-sm"
                  : "text-sm  font-semibold"
              }
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            {
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary underline text-sm"
                    : "text-sm  font-semibold"
                }
              >
                ABOUT
              </NavLink>
            }
          </li>
          <li>
            {
              <NavLink
                to={"/project"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary underline text-sm"
                    : "text-sm  font-semibold"
                }
              >
                Project
              </NavLink>
            }
          </li>
          <li>
            {
              <NavLink
                to={"/blog"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary underline text-sm"
                    : "text-sm  font-semibold"
                }
              >
               Blog
              </NavLink>
            }
          </li>
          <li>
            {
              <NavLink
                to={"/service"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary underline text-sm"
                    : "text-sm  font-semibold"
                }
              >
                Service
              </NavLink>
            }
          </li>
        </>
      );
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navList}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navList}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;