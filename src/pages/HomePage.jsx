import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PopCat from "../components/PopCat";
import Watch from "../components/Watch";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Watch />
      <Featured />
      <PopCat />
      <Footer />
    </>
  );
};

export default HomePage;
