import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
AOS.init();
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem("theme");
    return localTheme ? localTheme : "light";
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleLogOut = () => {
    logOut();
    Swal.fire({
      position: window.innerWidth <= 768 ? "top" : "top",
      width: "auto",
      padding: "1rem",
      showCloseButton: false,
      showCancelButton: false,
      text: "Logout Successfully",
      icon: "success",
      timer: 3000,
    });
  };

  const navLinks = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-base font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
              : "text-base z-[1] hover:bg-[#131313cc] hover:text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/allTourists"
          className={({ isActive }) =>
            isActive
              ? "text-base font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
              : "text-base z-[1] hover:bg-[#131313cc] hover:text-white"
          }
        >
          All Tourists Spot
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addTourist"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
                  : "text-base z-[1] hover:bg-[#131313cc] hover:text-white"
              }
            >
              Add Tourists Spot
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myList"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
                  : "text-base z-[1] hover:bg-[#131313cc] hover:text-white"
              }
            >
              My List
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-base font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
              : "text-base  z-[1] hover:bg-[#131313cc] hover:text-white"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="navbar bg-base-100 container mx-auto mt-4"
    >
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
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center">
          {/* <img className="h-[40px] lg:h-[60px] w-[30px] lg:w-[60px]" src="" alt="" /> */}

          <a
            className="btn btn-ghost text-xl md:text-3xl lg:text-4xl"
            style={{
              background: "linear-gradient(to right, green, blue)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            TourismTrek
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end pr-2">
          {user ? (
            <div className="flex items-center ">
              <div
              className="mr-2"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-12 rounded-full">
                    <img alt="Photo Coming Soon.." src={user?.photoURL} />
                  </div>
                </div>
                          
              </div>
              <button
                onClick={handleLogOut}
                className="btn bg-green-500 btn-sm md:btn-md lg:text-lg lg:px-6 text-bold text-white "
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-2">
              <Link to="/login">
                <button className="btn bg-green-500 btn-sm md:btn-md lg:text-lg md:px-4 lg:px-6 text-bold text-white ">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn bg-green-500 btn-sm md:btn-md lg:text-lg md:px-4 lg:px-6 text-bold text-white">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
        <label className="cursor-pointer grid place-items-center">
          <input
            onChange={handleToggle}
            type="checkbox"
            checked={theme === "dark"}
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      <Tooltip id="my-tooltip" place="left" />
    </div>
  );
};

export default Navbar;
