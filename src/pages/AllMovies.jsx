import { FaMagnifyingGlass } from "react-icons/fa6";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`/api/movies?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
      });
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="bg-accent py-20">
        <div className="flex justify-between container mx-auto mb-2">
          <div></div>
          <h1 className="text-2xl text-center font-bold mb-4">All Movies</h1>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              value={search}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaMagnifyingGlass />
          </label>
        </div>
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
