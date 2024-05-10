import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  let navItems = (
    <>
      <NavLink to="/">
        <li>
          <Button color="deep-orange" className="btn sans">
            Home
          </Button>
        </li>
      </NavLink>
      <NavLink to="/allfoodpage">
        <li>
          <Button color="deep-orange" className="btn pop">
            All Foods
          </Button>
        </li>
      </NavLink>
      <NavLink to="/gallery">
        <li>
          {" "}
          <Button color="deep-orange" className="btn pop">
            Gallery
          </Button>
        </li>
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* <ThemeToggle /> */}

              {navItems}
            </ul>
          </div>
          <NavLink to="/">
            <span className="btn btn-ghost text-xl jost">
              Wanderlust Voyage
            </span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
          <div className="ml-8">{/* <ThemeToggle /> */}</div>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="Button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL ||
                      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Typography className="pop">
                    {user?.displayName || "User not found"}
                  </Typography>
                </li>
                <li>
                  <NavLink
                    to="/myaddedfooditems"
                    color="blue"
                    variant="outlined"
                  >
                    <a className="pop">My added food items</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addfooditem"
                    color="blue"
                    variant="outlined"
                  >
                    <a className="pop">Add a food item</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myorderedfooditems"
                    color="blue"
                    variant="outlined"
                  >
                    <a className="pop">My ordered food items</a>
                  </NavLink>
                </li>

                <li>
                  <Button color="blue" variant="outlined" onClick={logOut}>
                    <a className="pop">Logout</a>
                  </Button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login">
              <Button color="lime" className="btn">
                Login
              </Button>
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
