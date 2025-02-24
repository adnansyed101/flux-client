import PropTypes from "prop-types";
import "animate.css";

const Slide = ({ content }) => {
  const { imgURl, title, description } = content;
  return (
    <div
      className="hero text-white min-h-[calc(100vh-100px)]"
      style={{
        backgroundImage: `url(${imgURl})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center py-36 animate__animated animate__bounce">
        <div className="max-w-xl">
          <h1 className="mb-5 text-2xl md:text-6xl font-bold">{title}</h1>
          <p className="mb-5 text-sm md:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  content: PropTypes.object,
};

export default Slide;
