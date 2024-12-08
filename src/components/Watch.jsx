import { Link } from "react-router-dom";
import watchImg from "../assets/watch.svg";

const Watch = () => {
  return (
    <div className="hero py-10 md:py-32">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={watchImg} className="md:max-w-xl rounded-lg" />
        <div>
          <h1 className="text-2xl md:text-5xl font-bold">
            Watch movie <br />
            everywhere, anytime.
          </h1>
          <p className="py-6 text-sm md:text-base">
            Movie websites are the ultimate guide for cinephiles, providing
            everything from showtimes to streaming options at your fingertips.
          </p>
          <Link to={"/addMovie"} className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Watch;
