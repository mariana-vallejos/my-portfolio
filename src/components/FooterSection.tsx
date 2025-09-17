import { GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import item1 from "../assets/img/Illustration2.png";
import item2 from "../assets/img/Illustration3.png";

const FooterSection = () => {
  return (
    <footer className="relative bg-blue-950 py-5 mt-10 h-48 flex flex-col justify-between text-gray-300 px-4">
      <img src={item1} alt="" className="w-56 absolute -top-30" />
      <div className="flex py-5 gap-3 justify-around">
        <div>
          <p>
            Email me:{" "}
            <a href="#" className="">
              marivalleandrea@gmail.com
            </a>
          </p>
        </div>
        <div className="inline-flex gap-4 items-center">
          <p>Or you can contact me: </p>
          <a href="" target="_blank" className="">
            <GrInstagram size={25} />
          </a>
          <a href="" target="_blank" className="">
            <GrLinkedinOption size={25} />
          </a>
          <a href="" target="_blank" className="">
            <SiGithub size={25} />
          </a>
        </div>
      </div>
      <p className="text-center italic pt-4 text-gray-300 border-t-1 w-full">
        Thanks for visiting my portfolio!
      </p>
      <img src={item2} alt="" className="w-[65%] absolute -bottom-0 right-0" />
    </footer>
  );
};

export default FooterSection;
