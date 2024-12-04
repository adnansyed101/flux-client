import { useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

const Featured = () => {
  const { data: movies } = useLoaderData();
  console.log(movies);

  return (
    <section className="container mx-auto">
      <div className="text-white text-center">
        <h1 className="text-xl md:text-3xl font-semibold mb-5">
          Featured Movies
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-slateGray p-5 rounded-lg">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Featured;
