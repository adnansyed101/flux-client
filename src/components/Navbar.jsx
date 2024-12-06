import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTv } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 550 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  const bg = navBg ? "bg-base-300" : "border-b border-accent";

  const links = (
    <>
      <li>
        <NavLink to="/" className="font-semibold text-lg">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/team" className="font-semibold text-lg">
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className="font-semibold text-lg">
          Add Movie
        </NavLink>
      </li>
      <li>
        <NavLink to="/favourties" className="font-semibold text-lg">
          My Favourites
        </NavLink>
      </li>
    </>
  );

  const logBtns = (
    <div className="space-x-2">
      <Link to="/signin" className="btn btn-primary">
        Sign In
      </Link>
      <Link to="/signup" className="btn btn-secondary">
        Sign Up
      </Link>
    </div>
  );

  return (
    <header className={`fixed top-0 z-50 w-full ${bg}`}>
      <div className="navbar py-0 w-11/12 mx-auto">
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
          <Link className="flex gap-2 items-center justify-center ">
            <FaTv className="text-4xl" />
            <span className="font-bold text-2xl">Flux</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-2">{links}</ul>
        </div>
        <div className="navbar-end">{logBtns}</div>
      </div>
    </header>
  );
};

export default Navbar;
