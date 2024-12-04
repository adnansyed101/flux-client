import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { _id, imgLink, title, rating, duration } = movie;
  return (
    <div className="card bg-midnightBlue shadow-xl">
      <figure className="p-5">
        <img src={imgLink} alt="Shoes" className="w-2/3 rounded-xl" />
      </figure>
      <div className="card-body pt-0">
        <h2 className="card-title">{title}</h2>
        <p>
          Rating: {rating} <br /> Duration: {duration} mins
        </p>
        <div className="card-actions">
          <Link to={`/movie/${_id}`} className="primary-btn">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
