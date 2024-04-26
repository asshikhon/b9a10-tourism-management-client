import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Toaster, toast } from "react-hot-toast";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import logoLogin from "../../../src/assets/images/login.png"
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate, useLocation } from "react-router-dom";



const Login = () => {
  const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleGoogleLogin = () => {
    googleLogin()
    .then(() => {
      Swal.fire({
        position: window.innerWidth <= 768 ? "top" : "top",
        width: "auto",
        padding: "1rem",
        showCloseButton: false,
        showCancelButton: false,
        text: "Login Successfully",
        icon: "success",
        timer: 3000,
      });
      // navigate
      navigate(location?.state ? location.state : "/");
    })
    .catch(error => {
    toast.error(error.message);
    })
  }

const handleGithubLogin = () => {
githubLogin()
.then(() => {
  Swal.fire({
    position: window.innerWidth <= 768 ? "top" : "top",
    width: "auto",
    padding: "1rem",
    showCloseButton: false,
    showCancelButton: false,
    text: "Login Successfully",
    icon: "success",
    timer: 3000,
  });
  // navigate
  navigate(location?.state ? location.state : "/");
})
.catch(error => {
toast.error(error.message);

})

}



  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then(() => {
        Swal.fire({
          position: window.innerWidth <= 768 ? "top" : "top",
          width: "auto",
          padding: "1rem",
          showCloseButton: false,
          showCancelButton: false,
          text: "Login Successfully",
          icon: "success",
          timer: 3000,
        });
        // navigate
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("User Name Or Password Wrong");
      });
  };

  return (
    <div

      style={{
        backgroundImage: `linear-gradient(rgba(173, 216, 230, 0.5), rgba(173, 216, 230, 0.5)), url($)`,

        backgroundSize: "100% 100%",

        backgroundPosition: "center",
        width: "99vw",
        height: "100vh",
      }}
      className="min-h-screen px-4 rounded-xl flex flex-col items-center justify-center py-12 mt-6 md:mt-0  sm:px-6 lg:px-8 mb-24 md:mb-0"
    >
      <Helmet>
        <link
          rel="shortcut icon"
          href={logoLogin}
          type="image/x-icon"
        />
        <title>TourismTrek || Login</title>
      </Helmet>

      <div className="w-full max-w-md p-8 space-y-3 rounded-xl  bg-gray-900 text-gray-100">
        <h1 className="text-2xl font-bold text-center">
          Login
        </h1>
        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label
              htmlFor="password"
              className="block font-semibold text-gray-400"
            >
              Password
            </label>
         
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              required
            />
                <span
                  className="absolute bottom-3 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <IoIosEyeOff className="text-2xl text-white " />
                  ) : (
                    <IoIosEye className="text-2xl text-white"></IoIosEye>
                  )}{" "}
                </span>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white font-semibold bg-violet-400">
            Login
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>

        <div className="flex justify-center space-x-4">
          <button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
            <FaGoogle className="text-2xl" />
          </button>

          <button onClick={handleGithubLogin} aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <FaGithub className="text-2xl" />
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">
          Do not have an account?
          <Link
            to="/register"
            rel="noopener noreferrer"
            href="#"
            className="underline pl-1 text-blue-500"
          >
            Register now
          </Link>
        </p>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
