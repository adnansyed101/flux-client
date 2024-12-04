import Slide from "./Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    document.title = "Flux | Home";
  }, []);

  const bannerContent = [
    {
      id: 1,
      imgURl:
        "https://media.istockphoto.com/id/1412871535/photo/friends-watching-movies-together-at-home.jpg?s=612x612&w=0&k=20&c=ELSN7ZtKYDs7DeW9EG_Dh7i-aIBOR_9ktlvRpFaZnEM=",
      title: "Your Gateway to the world of movies",
      description:
        "A good movie website is like a portal to another world, where every click brings you closer to the magic of cinema.",
    },
    {
      id: 2,
      imgURl:
        "https://www.acima.com/medias/Ways-To-Upgrade-At-Home-Movie-Nights.jpeg?context=bWFzdGVyfGltYWdlc3w0ODk1NXxpbWFnZS9qcGVnfHN5cy1tYXN0ZXIvaW1hZ2VzL2g5Zi9oNDYvODg1NDIwOTIwMDE1OC9XYXlzX1RvX1VwZ3JhZGVfQXRfSG9tZV9Nb3ZpZV9OaWdodHMuanBlZ3wyOTI2ZGE2ZDQ5NmViMDBhZWJjZGRjYWE4M2ZhMGY2NTMwOWNhNjBkODNjZWNiYzAxODNlNTUxMjk3Y2JhYmU0",
      title: "Dive into the Cinematic Universe",
      description:
        "A good movie website is like a portal to another world, where every click brings you closer to the magic of cinema.",
    },
    {
      id: 3,
      imgURl:
        "https://t4.ftcdn.net/jpg/06/80/07/95/360_F_680079558_4hDCHPns0lLfUonK17B8Spc4JTNrzPB6.jpg",
      title: "Where Every Movie Moment Matters",
      description:
        "A well-designed movie website is a treasure trove for film lovers, filled with reviews, trailers, and behind-the-scenes insights.",
    },
  ];

  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerContent.map((content) => (
          <SwiperSlide key={content.id}>
            <Slide content={content} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
