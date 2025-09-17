import illustration1 from "../assets/img/Illustration top.png";
import illustration2 from "../assets/img/Ilustration-bottom.png";

const isStudent = false;

const Header = () => {
  return (
    <header className="h-[70vh] flex flex-col items-center justify-center relative py-20">
      <img src={illustration1} alt="" className="absolute top-0 left-0 w-56" />

      <div className="py-6">
        <h1 className="text-5xl font-bold text-center mb-4">
          Hi! I'm Mariana Vallejos
        </h1>
        <h3 className="text-3xl font-semibold text-center">
          Full stack developer in training
        </h3>
      </div>
      <div className="py-3 px-5 bg-gradient-to-l from-accent to-blue rounded-xl">
        {isStudent ? "Student Portfolio" : "Portfolio"}
      </div>

      <img
        src={illustration2}
        alt=""
        className="absolute top-0 right-0 w-[35rem] -z-10"
      />
    </header>
  );
};

export default Header;
