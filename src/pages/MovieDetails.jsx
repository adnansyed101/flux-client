import { Link, useNavigate, useParams } from "react-router-dom";
import { FaRegTrashAlt, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/shared/Loading";
import useAuth from "../hooks/useAuth";

const MovieDetails = () => {
  const [disabled, setDisabled] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: movie, isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/movies/${id}`);
      return data;
    },
  });

  const addToFav = () => {
    fetch(
      "https://b10-a10-server-side-adnansyed101.vercel.app/api/movies/favourites",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setDisabled(true);
        toast.success(`${data.data.title} added to favourite`);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const deleteMovie = () => {
    fetch(`https://b10-a10-server-side-adnansyed101.vercel.app/api/movies/`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`${data.message}`);
        navigate("/allMovies");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="bg-gradient-to-br from-primary to-accent min-h-screen flex place-items-center py-20 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-base-100 p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          {/* Movie Image */}
          <figure>
            <img
              src={movie.imgLink}
              alt={movie.title}
              className="w-full object-cover rounded-lg shadow-md mb-6"
            />
          </figure>
          <div>
            {/* Title */}
            <h1 className="text-3xl font-bold text-primary mb-2 text-center">
              {movie.title}
            </h1>
            {/* Genre, Duration, Year, Rating */}

            <div className="text-sm text-secondary mb-4 grid grid-cols-2 lg:grid-cols-4 place-items-center gap-2">
              <span className="badge badge-outline badge-primary w-full">
                {movie.genre}
              </span>
              <span className="badge badge-outline w-full">
                {movie.duration} mins
              </span>
              <span className="badge badge-outline w-full">{movie.year}</span>
              <span className="badge badge-outline badge-accent w-full">
                Rating: {movie.rating}/10
              </span>
            </div>

            {/* Summary */}
            <p className="text-center text-base text-gray-600 mb-4">
              {movie.summary}
            </p>
            {/* Buttons */}
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                className="btn btn-primary"
                onClick={addToFav}
                disabled={disabled}
              >
                <FaHeart /> Add to Favourite
              </button>
              <button className="btn btn-error" onClick={deleteMovie}>
                <FaRegTrashAlt /> Delete Movie
              </button>
              <Link
                to={`/update/movie/${movie._id}`}
                className="btn btn-secondary"
              >
                Update Movie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
