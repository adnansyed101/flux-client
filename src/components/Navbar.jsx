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

  const bg = navBg ? "bg-slateGray" : "border-b border-emeraldGreen";

  const links = (
    <>
      <li>
        <NavLink to="/" className="font-semibold text-xl">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/team" className="font-semibold text-xl">
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="/offers" className="font-semibold text-xl">
          Add Movie
        </NavLink>
      </li>
      <li>
        <NavLink to="/beyond" className="font-semibold text-xl">
          My Favourites
        </NavLink>
      </li>
    </>
  );

  const logBtns = (
    <div className="space-x-2">
      <Link to="/signIn" className="primary-btn">
        Sign In
      </Link>
      <Link to="/signUp" className="secondary-btn">
        Sign Up
      </Link>
    </div>
  );

  return (
    <header className={`fixed top-0 z-50 w-full text-white ${bg}`}>
      <div className="navbar md:container mx-auto  md:px-10">
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
          <Link className="flex gap-2 place-items-center font-bold text-lg md:text-4xl">
            <FaTv />
            Flux
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
