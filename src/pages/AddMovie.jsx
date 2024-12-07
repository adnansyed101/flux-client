import { useEffect } from "react";
import Footer from "../components/Footer";
import MovieForm from "../components/MovieForm";
import Navbar from "../components/Navbar";

const AddMovie = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <MovieForm />
      <Footer />
    </>
  );
};

export default AddMovie;
