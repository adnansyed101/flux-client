import PropTypes from "prop-types";

const FavMovieCard = ({ movie }) => {
  const { imgLink, title, genre, duration, year, rating } = movie;
  return (
    <div className="card bg-base-100 shadow-lg rounded-lg">
      {/* Movie Poster */}
      <figure>
        <img
          src={imgLink}
          alt={title}
          className="w-full h-96 object-cover rounded-t-lg"
        />
      </figure>

      {/* Movie Details */}
      <div className="card-body">
        <h2 className="card-title text-primary">{title}</h2>

        {/* Genre, Duration, Year */}
        <p className="text-sm text-gray-500 mb-2">
          <span className="font-semibold">Genre:</span> {genre}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Duration:</span> {duration} mins
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Release Year:</span>{" "}
          {year}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Rating:</span> {rating}/10
        </p>

        {/* Delete Favorite Button */}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-error btn-sm">Delete Favorite</button>
        </div>
      </div>
    </div>
  );
};

FavMovieCard.propTypes = {
  movie: PropTypes.object,
};

export default FavMovieCard;
