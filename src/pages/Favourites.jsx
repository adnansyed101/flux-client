import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router-dom";
import FavMovieCard from "../components/FavMovieCard";
import { useEffect } from "react";

const Favourites = () => {
  const favMovies = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      {favMovies.length >= 1 ? (
        <div className="bg-accent py-20 min-h-screen">
          <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-3 gap-5 h-fit">
            {favMovies.map((movie) => (
              <FavMovieCard key={movie._id} movie={movie} />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-accent py-20 min-h-screen flex justify-center items-center">
          <h1 className="text-4xl font-semibold">No Favourites Selected</h1>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Favourites;
