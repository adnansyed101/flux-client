import axios from "axios";

// Server Link -- https://flux-server-gamma.vercel.app

const axiosPublic = axios.create({
  baseURL: "https://flux-server-gamma.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
