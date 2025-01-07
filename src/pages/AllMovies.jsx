import { FaMagnifyingGlass } from "react-icons/fa6";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(
      `https://b10-a10-server-side-adnansyed101.vercel.app/api/movies?search=${search}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
      });
  }, [search, sort]);

  return (
    <>
      <Navbar />
      <div className="bg-accent py-20 px-2">
        <div className="flex flex-col md:flex-row justify-center container mx-auto mb-2 gap-2">
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
          <select
            name="rating"
            id="rating"
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered max-w-xs"
            value={sort}
          >
            <option value="">Sort By Rating</option>
            <option value="dsc">High {">"} Low</option>
            <option value="asc">Low {">"} High</option>
          </select>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
