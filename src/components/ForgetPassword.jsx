import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const { changePassword } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Flux | Forget Password";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");

    changePassword(email)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
      });
  };

  return (
    <div className="hero bg-gradient-to-br from-primaryBg to-accent min-h-screen text-primaryText">
      <div className="hero-content">
        <div className="card bg-primaryBg shadow-2xl">
          <div className="card-body">
            <form className="md:w-96" onSubmit={handleSubmit}>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
                Change Password
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input border-accent"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary">
                  Send Verification Mail
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
