import { useContext, useEffect } from "react";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PopCat from "../components/PopCat";
import Watch from "../components/Watch";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";

const HomePage = () => {
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loading />;
  }

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
