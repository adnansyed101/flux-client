import { BsGithub, BsMessenger } from "react-icons/bs";
import { FaTv } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-primary p-2">
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto">
        <aside>
          <p className="flex gap-2 items-center justify-center">
            <FaTv className="text-4xl" />
            <span className="font-bold text-2xl">Flux</span>
          </p>
        </aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        <nav>
          <div className="flex justify-center gap-2">
            <h6 className="footer-title text-center">Scoial</h6>
            <div className="flex justify-center gap-2">
              <a
                href="https://github.com/adnansyed101"
                target="_blank"
                className="text-2xl"
              >
                <BsGithub />
              </a>
              <a
                href="https://m.me/adnansyed101"
                target="_blank"
                className="text-2xl"
              >
                <BsMessenger />
              </a>
            </div>
          </div>
          <span>Contact Us: Flux@gmail.com</span>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
