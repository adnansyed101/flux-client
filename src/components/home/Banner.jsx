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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayQuUkQCIf9i3kdrsBg1UKAXF3OB2PX0JkQ&s",
      title: "Your Gateway to the world of movies",
      description:
        "A good movie website is like a portal to another world, where every click brings you closer to the magic of cinema.",
    },
    {
      id: 2,
      imgURl:
        "https://img.freepik.com/free-photo/group-friends-watching-tv-sport-match-together-emotional-fans-cheering-favourite-team-watching-exciting-football-concept-friendship-leisure-activity-emotions_155003-38767.jpg?semt=ais_hybrid",
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
