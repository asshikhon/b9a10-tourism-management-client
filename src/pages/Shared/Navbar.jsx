import { Link, NavLink } from "react-router-dom";
import Swal from 'sweetalert2'
// import logoHomeHaven from "../../../src/assets/images/HomeHaven.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
AOS.init();

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);


  
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
      timer: 3000 
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
        : "text-base text-[#131313cc] z-[1] hover:bg-[#131313cc] hover:text-white"
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
        : "text-base text-[#131313cc] z-[1] hover:bg-[#131313cc] hover:text-white"
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
              : "text-base text-[#131313cc] z-[1] hover:bg-[#131313cc] hover:text-white"
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
              : "text-base text-[#131313cc] z-[1] hover:bg-[#131313cc] hover:text-white"
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
              ? "text-lg font-semibold border border-[#23BE0A] rounded-lg text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white"
              : "text-lg text-[#131313cc] z-[1] hover:bg-[#131313cc] hover:text-white"
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
<img className="h-[40px] lg:h-[60px] w-[30px] lg:w-[60px]" src="" alt="" />

<a className="btn btn-ghost text-xl md:text-3xl lg:text-4xl" style={{ background: 'linear-gradient(to right, green, blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
      HomeHaven
    </a>
</div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end pr-2">
          {user ? (
            <div className="flex items-center">
              <div className="tooltip" data-tip={user.displayName}>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar animate__animated animate__backInLeft animate__delay-1s"
                >
                  <div className="w-10 rounded-full">
                    <img alt="phot coming soon..." src={user.photoURL} />
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
      </div>

    </div>
  );
};

export default Navbar;
