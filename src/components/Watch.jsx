import watchImg from "../assets/watch.svg";

const Watch = () => {
  return (
    <div className="hero py-32">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={watchImg} className="max-w-xl rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold">
            Watch movie <br />
            everywhere, anytime.
          </h1>
          <p className="py-6">
            Movie websites are the ultimate guide for cinephiles, providing
            everything from showtimes to streaming options at your fingertips.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Watch;
