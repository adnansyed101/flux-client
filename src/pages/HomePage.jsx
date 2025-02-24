import { useEffect } from "react";
import Featured from "../components/home/Featured";
import PopCat from "../components/home/PopCat";
import Watch from "../components/home/Watch";
import Banner from "../components/home/Banner";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <Watch />
      <Featured />
      <PopCat />
    </>
  );
};

export default HomePage;
