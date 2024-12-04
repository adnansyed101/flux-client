import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../provider/AuthProvider";
// import { toast } from "react-toastify";
import "animate.css";
// import Loading from "../components/Loading";

const SignIn = () => {
  //   const { login, setUser, createUserWithGoogle, loading, setLoading } =
  //     useContext(AuthContext);
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     document.title = "Go Travels | Login";
  //   }, []);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const form = new FormData(e.target);
  //     const email = form.get("email");
  //     const password = form.get("password");

  //     login(email, password)
  //       .then((result) => {
  //         const user = result.user;
  //         setUser(user);
  //         toast.success("Yay! Logged in.");
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         toast.error(errorCode);
  //         setLoading(false);
  //       });
  //   };

  //   const handleGoogleLogin = () => {
  //     createUserWithGoogle()
  //       .then((res) => {
  //         const user = res.user;
  //         setUser(user);
  //         navigate("/");
  //         toast.success("Login Succesfull.");
  //       })
  //       .catch((err) => {
  //         const errorCode = err.code;
  //         toast.error(errorCode);
  //       });
  //   };

  //   if (loading) {
  //     return <Loading />;
  //   }

  return (
    <div className="hero bg-gradient-to-br from-midnightBlue to-slateGray min-h-screen text-white">
      <div className="hero-content">
        <div className="card bg-primaryBg shadow-2xl animate__animated animate__bounceInDown">
          <div className="card-body">
            <form className="md:w-96">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
                Login
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input border-accent"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="input border-accent"
                  required
                />
                <label className="label">
                  <Link
                    to="/forget-password"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <p>
                Do not have an account ?{" "}
                <Link to="/register" className="text-accent">
                  Register
                </Link>
              </p>
              <div className="form-control mt-4">
                <button className="primary-btn">Login</button>
              </div>
            </form>
            <button
              //   onClick={handleGoogleLogin}
              className="btn btn-outline btn-accent"
            >
              <BsGoogle /> Login Using Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
