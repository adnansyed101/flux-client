import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const FavMovieCard = ({ movie, favMovieId }) => {
  const { imgLink, title, genre, duration, year, rating } = movie;
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync: deleteFavouriteMovie } = useMutation({
    mutationFn: () => axiosPublic.delete(`/favourites/${favMovieId}`),
    onSuccess: () => {
      toast.warn(`Movie deleted.`);
      navigate(`/favourites/${user.uid}`);
      return queryClient.invalidateQueries("favMovies");
    },
    onError: (err) => {
      return toast.error("Error in deleting movie: " + err.message);
    },
  });

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
          <button
            className="btn btn-error btn-sm"
            onClick={deleteFavouriteMovie}
          >
            Delete Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

FavMovieCard.propTypes = {
  movie: PropTypes.object,
  favMovieId: PropTypes.string,
};

export default FavMovieCard;
