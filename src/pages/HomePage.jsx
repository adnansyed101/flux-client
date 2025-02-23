import { useEffect } from "react";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import PopCat from "../components/PopCat";
import Watch from "../components/Watch";

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
