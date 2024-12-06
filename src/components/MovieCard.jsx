import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { _id, imgLink, title, rating, duration } = movie;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={imgLink} alt="Movie" className="w-full"/>
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title">{title}</h2>
        <p>
          Rating: {rating} <br /> Duration: {duration} mins
        </p>
        <div className="card-actions">
          <Link to={`/movie/${_id}`} className="btn btn-primary">
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
