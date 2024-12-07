import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { _id, imgLink, title, rating, duration, genre } = movie;
  return (
    <div className="card bg-base-100 image-full shadow-xl">
      <figure>
        <img src={imgLink} alt="Movie" className="w-full" />
      </figure>
      <div className="card-body justify-between">
        <div className="space-y-4">
          <h2 className="card-title text-2xl">{title}</h2>
          <p className="text-xl">Rating: {rating}</p>
          <p className="text-xl">Duration: {duration} mins</p>
          <p className="text-xl">Genre: {genre}</p>
        </div>
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
