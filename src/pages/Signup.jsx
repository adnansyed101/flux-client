// import { useContext, useEffect, useState } from "react";
import { BsGoogle } from "react-icons/bs";
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import { toast } from "react-toastify";
import "animate.css";

const Signup = () => {
  //   const [showPwd, setShowPwd] = useState(false);
  //   const [showVerifyPwd, setShowVerifyPwd] = useState(false);
  //   const { createNewUser, setUser, updateUserProfile, createUserWithGoogle } =
  //     useContext(AuthContext);
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     document.title = "Go Travels | Login";
  //   }, []);

  //   const handleShowPwd = () => setShowPwd(!showPwd);
  //   const handleShowVerifyPwd = () => setShowVerifyPwd(!showVerifyPwd);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const form = new FormData(e.target);
  //     const name = form.get("name");
  //     const photo = form.get("photoURL");
  //     const email = form.get("email");
  //     const password = form.get("password");
  //     const verifyPassword = form.get("verifyPassword");
  //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  //     if (password !== verifyPassword) {
  //       toast.error("Passwords do not match");
  //       return;
  //     }

  //     if (!passwordRegex.test(password) || !passwordRegex.test(verifyPassword)) {
  //       toast.warn("Must have 1 Uppercase, 1 Lowercase and atleast 6 character.");
  //       return;
  //     }

  //     createNewUser(email, password)
  //       .then((result) => {
  //         const user = result.user;
  //         setUser(user);
  //         updateUserProfile({ displayName: name, photoURL: photo })
  //           .then(() => {
  //             toast.success("Account Created Successfully.");
  //             navigate("/");
  //           })
  //           .catch((error) => {
  //             const errorCode = error.code;
  //             toast.error(errorCode);
  //           });
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         toast.error(errorCode);
  //       });
  //   };

  //   const handleGoogleSignUp = () => {
  //     createUserWithGoogle()
  //       .then((res) => {
  //         const user = res.user;
  //         setUser(user);
  //         navigate("/");
  //         toast.success("Account Created Successfully.");
  //       })
  //       .catch((err) => {
  //         const errorCode = err.code;
  //         toast.error(errorCode);
  //       });
  //   };

  return (
    <div className="hero bg-gradient-to-br from-midnightBlue to-slateGray min-h-screen text-white">
      <div className="hero-content">
        <div className="card bg-primaryBg shadow-2xl animate__animated animate__bounceInUp">
          <div className="card-body">
            <form className="md:w-96">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
                Register
              </h1>
              {/* Photo-URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input border-accent"
                  required
                />
              </div>
              {/* Photo-URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  className="input border-accent"
                  required
                />
              </div>
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input border-accent"
                  required
                />
              </div>
              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <label className="input border-accent flex items-center gap-2">
                  <input
                    // type={showPwd ? "text" : "password"}
                    type="text"
                    name="password"
                    className="grow"
                    autoComplete="off"
                    required
                  />
                  {/* {showPwd ? (
                    <FaEyeSlash onClick={handleShowPwd} />
                  ) : (
                    <FaEye onClick={handleShowPwd} />
                  )} */}
                </label>
              </div>
              {/* Verify Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Verify Password</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    // type={showVerifyPwd ? "text" : "password"}
                    type="text"
                    name="verifyPassword"
                    className="grow"
                    autoComplete="off"
                    required
                  />
                  {/* {showVerifyPwd ? (
                    <FaEyeSlash onClick={handleShowVerifyPwd} />
                  ) : (
                    <FaEye onClick={handleShowVerifyPwd} />
                  )} */}
                </label>
              </div>
              <p className="mt-4">
                Already have an account ?{" "}
                <Link to="/login" className="text-accent">
                  Login
                </Link>
              </p>
              <div className="form-control mt-4">
                <button type="submit" className="primary-btn">
                  Register
                </button>
              </div>
            </form>
            <button
              className="btn btn-outline btn-accent"
              //   onClick={handleGoogleSignUp}
            >
              <BsGoogle /> Sign Up Using Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
