import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTv } from "react-icons/fa6";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut, theme, toggleTheme } = useAuth();

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const links = (
    <>
      <li>
        <NavLink to="/" className="font-semibold text-lg">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allMovies" className="font-semibold text-lg">
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="/pricing" className="font-semibold text-lg">
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink to="/contactus" className="font-semibold text-lg">
          Contact Us
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addMovie" className="font-semibold text-lg">
              Add Movie
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/favourites/${user.uid}`}
              className="font-semibold text-lg"
            >
              My Favourites
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/myMovies/${user.uid}`}
              className="font-semibold text-lg"
            >
              My Movies
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const navOptions =
    user && user?.email ? (
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Photo"
              src={user?.photoURL}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li className="text-center mb-2">{user?.displayName}</li>
          <li>
            <button onClick={logOut} className="btn btn-warning btn-sm">
              Logout
            </button>
          </li>
        </ul>
      </div>
    ) : (
      <div className="flex flex-col md:flex-row gap-1">
        <Link to="/signin" className="btn btn-xs md:btn-md btn-accent">
          Sign In
        </Link>
        <Link to="/signup" className="btn btn-xs md:btn-md  btn-secondary">
          Sign Up
        </Link>
      </div>
    );

  return (
    <header className="w-full fixed top-0 z-50 bg-base-200 border border-b-black ">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-1 lg:hidden">
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-accent rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="flex gap-2 items-center justify-center ">
            <FaTv className="text-4xl" />
            <span className="font-bold text-2xl">Flux</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-2">{links}</ul>
        </div>
        <div className="navbar-end space-x-2">
          {navOptions}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              onClick={toggleTheme}
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
