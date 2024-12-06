import { useContext, useEffect, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import "animate.css";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signup = () => {
  const [showPwd, setShowPwd] = useState(false);
  const [showVerifyPwd, setShowVerifyPwd] = useState(false);
  const { createNewUser, setUser, updateUserProfile, createUserWithGoogle } =
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
    document.title = "Flux | Sign Up";
  }, []);

  const handleShowPwd = () => setShowPwd(!showPwd);
  const handleShowVerifyPwd = () => setShowVerifyPwd(!showVerifyPwd);

  const onSubmit = (data) => {
    const { name, photoURL: photo, email, password, verifyPassword } = data;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (password !== verifyPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!passwordRegex.test(password) || !passwordRegex.test(verifyPassword)) {
      toast.warn("Must have 1 Uppercase, 1 Lowercase and atleast 6 character.");
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Account Created Successfully.");
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            toast.error(errorCode);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
      });
  };

  const handleGoogleSignUp = () => {
    createUserWithGoogle()
      .then((res) => {
        const user = res.user;
        setUser(user);
        navigate("/");
        toast.success("Account Created Successfully.");
      })
      .catch((err) => {
        const errorCode = err.code;
        toast.error(errorCode);
      });
  };

  return (
    <>
      <Navbar />
      <section className="hero bg-gradient-to-br from-primary to-accent min-h-screen pt-20">
        <div className="hero-content">
          <div className="card bg-base-100 shadow-2xl animate__animated animate__bounceInUp">
            <div className="card-body">
              <form className="min-w-96" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
                  Sign Up
                </h1>
                {/* Photo-URL */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: "This is required",
                    })}
                    type="text"
                    className="input border-accent"
                  />
                  {errors.Name && (
                    <p className="text-error">{errors.Name?.message}</p>
                  )}
                </div>
                {/* Photo-URL */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    {...register("photoURL", {
                      required: "This is required",
                    })}
                    type="text"
                    className="input border-accent"
                    required
                  />
                </div>
                {/* Email */}
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
                    required
                  />
                </div>
                {/* Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <label className="input border-accent flex items-center gap-2">
                    <input
                      {...register("password", {
                        required: "This is required",
                      })}
                      type={showPwd ? "text" : "password"}
                      className="grow"
                      autoComplete="off"
                      required
                    />
                    {showPwd ? (
                      <FaEyeSlash onClick={handleShowPwd} />
                    ) : (
                      <FaEye onClick={handleShowPwd} />
                    )}
                  </label>
                </div>
                {/* Verify Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Verify Password</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <input
                      {...register("verifyPassword", {
                        required: "This is required",
                      })}
                      type={showVerifyPwd ? "text" : "password"}
                      className="grow"
                      autoComplete="off"
                      required
                    />
                    {showVerifyPwd ? (
                      <FaEyeSlash onClick={handleShowVerifyPwd} />
                    ) : (
                      <FaEye onClick={handleShowVerifyPwd} />
                    )}
                  </label>
                </div>
                <p className="mt-4">
                  Already have an account ?{" "}
                  <Link to="/signin" className="text-accent">
                    Sign In
                  </Link>
                </p>
                <div className="form-control mt-4">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
              <button
                className="btn btn-outline btn-accent"
                onClick={handleGoogleSignUp}
              >
                <BsGoogle /> Sign Up Using Google
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
