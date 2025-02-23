import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import FavMovieCard from "../components/FavMovieCard";
import { useEffect } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";

const Favourites = () => {
  const { uid } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: favMovies, isLoading } = useQuery({
    queryKey: ["favMovies"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/favourites/${uid}`);
      return data;
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      {favMovies.length >= 1 ? (
        <div className="bg-base-100 py-20 min-h-screen">
          <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-3 gap-5 h-fit">
            {favMovies.map((movie) => (
              <FavMovieCard key={movie._id} movie={movie.movie} />
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
