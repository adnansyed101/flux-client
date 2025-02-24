import { Link } from "react-router-dom";
import MovieCard from "../cards/MovieCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../shared/Loading";

const Featured = () => {
  const axiosPublic = useAxiosPublic();

  const { data: featuredMovies, isLoading } = useQuery({
    queryKey: ["featuredMovies"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/movies/featured`);
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <h1 className="text-xl md:text-3xl font-semibold mb-5 text-center">
        Featured Movies
      </h1>
      <div className="bg-base-200 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 xl:gap-4 px-2">
          {featuredMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to={"/allMovies"} className="btn btn-secondary">
            See All Movie
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
