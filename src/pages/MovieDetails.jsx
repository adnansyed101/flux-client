import { useLoaderData } from "react-router-dom";
import { FaRegTrashAlt, FaHeart } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const MovieDetails = () => {
  const [disabled, setDisabled] = useState(false);
  const { data: movie } = useLoaderData();
  const { user } = useContext(AuthContext);

  // eslint-disable-next-line no-unused-vars
  const { _id, ...addMovie } = movie;

  const addToFav = () => {
    fetch("/api/movies/favourites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...addMovie, email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setDisabled(true);
        toast.success(`${data.data.title} added to favourite`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-primary to-accent min-h-screen flex place-items-center">
        <div className="grid grid-cols-2 gap-4 bg-base-100 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
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

            <div className="text-sm text-secondary mb-4 space-x-2">
              <span className="badge badge-outline badge-primary">
                {movie.genre}
              </span>
              <span className="badge badge-outline">{movie.duration} mins</span>
              <span className="badge badge-outline">{movie.year}</span>
              <span className="badge badge-outline badge-accent">
                Rating: {movie.rating}/10
              </span>
            </div>

            {/* Summary */}
            <p className="text-center text-base text-gray-600 mb-4">
              {movie.summary}
            </p>
            {/* Buttons */}
            <div className="flex gap-4 justify-center">
              <button
                className="btn btn-primary"
                onClick={addToFav}
                disabled={disabled}
              >
                <FaHeart /> Add to Favourite
              </button>
              <button className="btn btn-error">
                <FaRegTrashAlt /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetails;
