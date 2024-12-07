import { Link, useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

const Featured = () => {
  const { data: movies } = useLoaderData();

  return (
    <section>
      <div className="text-center">
        <h1 className="text-xl md:text-3xl font-semibold mb-5">
          Featured Movies
        </h1>
      </div>
      <div className="bg-accent py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 xl:gap-4 px-2">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to={"/allMovies"} className="btn btn-primary">
            See All Movie
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
