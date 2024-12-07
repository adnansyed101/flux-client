import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTv } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { IoPersonCircle } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
      {user && (
        <>
          <li>
            <NavLink to="/addMovie" className="font-semibold text-lg">
              Add Movie
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/favourites/${user.email}`}
              className="font-semibold text-lg"
            >
              My Favourites
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const logBtns =
    user && user.email ? (
      <div className="flex gap-1 md:gap-4 items-center">
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-center mr-10">
          <div tabIndex={0} role="button">
            <div className="avatar flex place-items-center">
              <div className="w-12 rounded-full">
                {user && user?.photoURL ? (
                  <img src={user.photoURL} alt="User Image" />
                ) : (
                  <IoPersonCircle />
                )}
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-accent rounded-box z-[1] w-52 p-2 shadow"
          >
            <li className="text-center mb-2 font-semibold text-white">
              {user?.displayName}
            </li>
            <li>
              <button onClick={logOut} className="btn btn-sm btn-secondary">
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    ) : (
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
    <header className="w-full fixed top-0 z-50 bg-base-300">
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
