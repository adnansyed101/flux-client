import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Favourites = () => {
  const favMovies = useLoaderData();

  return (
    <>
      <Navbar />
      <div className="bg-accent py-20 min-h-screen">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 h-fit">
          {favMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favourites;
