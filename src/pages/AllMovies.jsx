import { FaMagnifyingGlass } from "react-icons/fa6";
import MovieCard from "../components/cards/MovieCard";
import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Loading from "../components/shared/Loading";
import { useQuery } from "@tanstack/react-query";
import useDebounce from "../hooks/useDebounceValue";

const AllMovies = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const debouncedSearchTerm = useDebounce(search, 300);

  const { data: allMovies, isLoading } = useQuery({
    queryKey: ["allMovies", debouncedSearchTerm, sort],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/movies?search=${debouncedSearchTerm}&sort=${sort}`
      );
      return data;
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-base-100 py-20 px-2 min-h-screen">
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
        {isLoading ? (
          <Loading />
        ) : (
          allMovies.map((movie) => <MovieCard key={movie._id} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default AllMovies;
