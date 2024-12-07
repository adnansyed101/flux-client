import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { toast } from "react-toastify";

const UpdateMovieForm = () => {
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
  const { data: movie } = useLoaderData();
  const navigate = useNavigate();

  const [rating, setRating] = useState(movie.rating);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      imgLink: movie?.imgLink,
      title: movie?.title,
      genre: movie?.genre,
      duration: movie?.duration,
      year: movie?.year,
      summary: movie?.summary,
    },
  });

  const years = Array.from(
    { length: new Date().getFullYear() - 1900 + 1 },
    (_, i) => 1900 + i
  );

  const handleRating = (rate) => {
    setRating(rate);
  };

  const onSubmit = (data) => {
    const newMovie = { ...data, rating };

    fetch(`/api/movies/${movie._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/movie/${movie._id}`);
        toast.success(`${data.data.title} movie updated`);
      });
  };

  return (
    <section className="flex flex-col items-center pt-20 pb-10">
      <div className="text-center">
        <h1 className="text-xl md:text-3xl font-semibold mb-5">Update Movie</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          {/* Image Link */}
          <div className="form-control">
            <div className="label">
              <span className="label-text">Image Link</span>
            </div>
            <input
              type="text"
              {...register("imgLink", {
                required: "This is required",
                pattern: {
                  value:
                    /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/,
                  message: "There seems to be a mistake with the link",
                },
              })}
              className="input input-bordered"
              placeholder="Movie Image Link"
            />
            {errors.imgLink && (
              <p className="text-error">{errors.imgLink?.message}</p>
            )}
          </div>
          {/* Title */}
          <div className="form-control">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              type="text"
              {...register("title", {
                required: "This is required",
                minLength: {
                  value: 2,
                  message: "At Least 2 Characters",
                },
              })}
              className="input input-bordered"
              placeholder="Movie Name"
            />
            {errors.title && (
              <p className="text-error">{errors.title?.message}</p>
            )}
          </div>
          {/* Select Genre */}
          <div className="form-control">
            <div className="label">
              <span className="label-text">Select Genre</span>
            </div>
            <Controller
              name="genre"
              control={control}
              rules={{ required: "This is required" }}
              render={({ field }) => (
                <select {...field} className="select select-bordered">
                  <option disabled>Select Genre</option>
                  {genres.map((genre) => (
                    <option key={genre.id}>{genre.name}</option>
                  ))}
                </select>
              )}
            />
            {errors.genre && (
              <p className="text-error">{errors.genre?.message}</p>
            )}
          </div>
          {/* Duration */}
          <div className="form-control">
            <div className="label">
              <span className="label-text">Duration</span>
            </div>
            <input
              type="number"
              name="duration"
              {...register("duration", {
                required: "This is required",
                min: {
                  value: 60,
                  message: "At least 60 mins",
                },
              })}
              className="input input-bordered"
              placeholder="In Minutes"
            />
            {errors.duration && (
              <p className="text-error">{errors.duration?.message}</p>
            )}
          </div>
          {/* Release Year */}
          <div className="form-control">
            <div className="label">
              <span className="label-text">Release Year</span>
            </div>
            <Controller
              name="year"
              control={control}
              rules={{ required: "This is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  defaultValue={"Select Year"}
                  className="select select-bordered"
                >
                  <option disabled>Select Year</option>
                  {years.map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </select>
              )}
            />
            {errors.year && (
              <p className="text-error">{errors.year?.message}</p>
            )}
          </div>
          {/* Rating */}
          <div className="form-control">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <Rating
              onClick={handleRating}
              allowFraction={true}
              transition={true}
              iconsCount={10}
              initialValue={movie.rating}
            />
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Summary</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              {...register("summary", {
                required: "This is required",
                minLength: {
                  value: 10,
                  message: "At least 10 characters",
                },
              })}
              placeholder="Info About Movie"
            ></textarea>
            {errors.summary && (
              <p className="text-error">{errors.summary?.message}</p>
            )}
          </label>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateMovieForm;
