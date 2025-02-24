const PopCat = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
        <div className="grid grid-cols-4 gap-2 grid-rows-[200px_200px_200px] px-4">
          {/* Category */}
          <div className="card image-full shadow-xl col-span-2">
            <figure>
              <img
                src="https://www.shutterstock.com/image-photo/actors-actresses-play-modern-lyrical-600nw-1905059638.jpg"
                alt="Category"
                className="w-full"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <h2 className="card-title">Dramas</h2>
            </div>
          </div>
          {/* Category */}
          <div className="card image-full shadow-xl col-span-2">
            <figure>
              <img
                src="https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/images/panoramic/inside-out-2-inc_541857_pgzat8.jpg"
                alt="Category"
                className="w-full"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <h2 className="card-title">Cartoons</h2>
            </div>
          </div>
          {/* Category */}
          <div className="card image-full shadow-xl col-span-4">
            <figure>
              <img
                src="https://wallpapers.com/images/hd/millennium-falcon-hyperspace-ultra-wide-7qtldb0j3bgz7mfy.jpg"
                alt="Category"
                className="w-full"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <h2 className="card-title">Scif-Fi & Fantasy</h2>
            </div>
          </div>
          {/* Category */}
          <div className="card image-full shadow-xl col-span-2">
            <figure>
              <img
                src="https://media.rnztools.nz/rnz/image/upload/s--Uqndf8Dr--/c_scale,f_auto,q_auto,w_1050/v1643602582/4N8B80P_image_crop_84585?_a=BACCd2AD"
                alt="Category"
                className="w-full"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <h2 className="card-title justify-center items-center">Comedy</h2>
            </div>
          </div>
          {/* Category */}
          <div className="card image-full shadow-xl col-span-2">
            <figure>
              <img
                src="https://t4.ftcdn.net/jpg/06/35/01/43/360_F_635014373_JTiKYJyGpQ72XvvS6O8XhAWEqb9x69hI.jpg"
                alt="Category"
                className="w-full"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <h2 className="card-title">Action</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center justify-center items-center">
          <h1 className="text-xl md:text-3xl font-semibold mb-5">
            Popular Categories
          </h1>
          <p>
            All content at Flux is divided into several categories. It helps you
            to easily navigate between them and find what you like.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PopCat;
