const MovieForm = () => {
  const genres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Adventure" },
    { id: 3, name: "Comedy" },
    { id: 4, name: "Drama" },
    { id: 5, name: "Fantasy" },
    { id: 6, name: "Sci-Fi" },
    { id: 7, name: "Horror" },
    { id: 8, name: "Thriller" },
    { id: 9, name: "Romance" },
    { id: 10, name: "Animation" },
  ];

  return (
    <section className="my-10 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-xl md:text-3xl font-semibold mb-5">Add Movie</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              Image URL
              <input type="text" className="grow" placeholder="Daisy" />
            </label>
          </div>
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              Title
              <input type="text" className="grow" placeholder="Daisy" />
            </label>
          </div>
          <div className="form-control">
            <select className="select select-bordered">
              <option disabled selected>
               Select Genre
              </option>
              {genres.map((genre) => (
                <option key={genre.id}>{genre.name}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              Duration
              <input type="number" className="grow" placeholder="in minutes" />
            </label>
          </div>
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              Realease Date
              <input type="date" className="grow" />
            </label>
          </div>
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              Rating
              <input type="number" className="grow" />
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text font-semibold text-lg">Summary</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MovieForm;
