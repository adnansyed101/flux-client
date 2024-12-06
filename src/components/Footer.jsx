import { BsGithub, BsMessenger } from "react-icons/bs";
import { FaTv } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="block bg-neutral text-neutral-content p-2">
      <div className="flex justify-between items-center container mx-auto">
        <aside>
          <p className="flex gap-2 items-center justify-center ">
            <FaTv className="text-4xl" />
            <span className="font-bold text-2xl">Flux</span>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
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
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
