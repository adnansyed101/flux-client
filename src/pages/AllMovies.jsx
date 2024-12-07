import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AllMovies = () => {
  const { data: movies } = useLoaderData();

  return (
    <>
      <Navbar />
      <div className="bg-accent py-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllMovies;
