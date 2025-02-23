import PropTypes from "prop-types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const FavMovieCard = ({ movie }) => {
  const { imgLink, title, genre, duration, year, rating, _id } = movie;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const deleteFavMovie = () => {
    fetch(
      `https://b10-a10-server-side-adnansyed101.vercel.app/api/movies/favourites/${user.email}/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.error(`${data.message}`);
        navigate(`/favourites/${user.email}`);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

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
        <p className="text-sm mb-2">
          <span className="font-semibold">Genre:</span> {genre}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Duration:</span> {duration} mins
        </p>
        <p className="text-sm">
          <span className="font-semibold">Release Year:</span> {year}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Rating:</span> {rating}/5
        </p>

        {/* Delete Favorite Button */}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-error btn-sm" onClick={deleteFavMovie}>
            Delete Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

FavMovieCard.propTypes = {
  movie: PropTypes.object,
};

export default FavMovieCard;
