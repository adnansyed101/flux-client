import { useParams } from "react-router-dom";
import FavMovieCard from "../components/cards/FavMovieCard";
import { useEffect } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/shared/Loading";

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
    <div className="bg-base-100 py-20 min-h-screen">
      {favMovies.length > 0 ? (
        <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 h-fit">
          {favMovies.map((movie) => (
            <FavMovieCard key={movie._id} movie={movie.movie} favMovieId={movie._id}/>
          ))}
        </div>
      ) : (
        <h1 className="text-4xl font-semibold text-center">
          No Favourites Selected
        </h1>
      )}
    </div>
  );
};

export default Favourites;
