import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import "animate.css";
import Loading from "../components/Loading";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignIn = () => {
  const { login, setUser, createUserWithGoogle, loading, setLoading } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "Flux | Login";
  }, []);

  const onSubmit = (data) => {
    const { email, password } = data;

    login(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Yay! Logged in.");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    createUserWithGoogle()
      .then((res) => {
        const user = res.user;
        setUser(user);
        navigate("/");
        toast.success("Login Succesfull.");
      })
      .catch((err) => {
        const errorCode = err.code;
        toast.error(errorCode);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="hero bg-gradient-to-br from-primary to-accent min-h-screen">
        <div className="hero-content">
          <div className="card bg-slate-100 shadow-2xl animate__animated animate__bounceInDown">
            <div className="card-body p-4 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="md:w-96">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
                  Sign In
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: "This is required",
                    })}
                    type="email"
                    className="input border-accent"
                  />
                  {errors.email && (
                    <p className="text-error">{errors.email?.message}</p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "This is required",
                    })}
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
                  Do not have an account?{" "}
                  <Link to="/signup" className="text-accent">
                    Sign Up
                  </Link>
                </p>
                <div className="form-control mt-4">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline btn-secondary"
              >
                <BsGoogle /> Login Using Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
