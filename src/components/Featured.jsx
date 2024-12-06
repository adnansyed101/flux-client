import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

const Featured = () => {
  const { data: movies } = useLoaderData();
  console.log(movies);

  return (
    <section>
      <div className="text-center">
        <h1 className="text-xl md:text-3xl font-semibold mb-5">
          Featured Movies
        </h1>
      </div>
      <div className="bg-accent py-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-6 gap-5">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
