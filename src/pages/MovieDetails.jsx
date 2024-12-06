import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MovieDetails = () => {
  const data = useLoaderData();
  const { data: movie } = data;

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
                <span className="badge badge-outline">
                  {movie.duration} mins
                </span>
                <span className="badge badge-outline">{movie.year}</span>
                <span className="badge badge-outline badge-accent">
                  Rating: {movie.rating}/10
                </span>
              </div>
            </div>

            {/* Summary */}
            <p className="text-center text-base text-gray-600">
              {movie.summary}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetails;
