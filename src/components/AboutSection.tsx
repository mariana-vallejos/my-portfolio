import avatar from "../assets/img/confident.png";
import item1 from "../assets/img/Illustration.png";
import bg from "../assets/img/BG Small Circle.png";

const AboutSection = () => {
  return (
    <section className="flex justify-center py-12">
      <div
        className="relative flex h-[28rem] w-[30rem] items-center rounded-full  bg-gradient-to-r from-accent to-blue"
      >
        <img
          src={avatar}
          alt="avatar"
          className="absolute -top-24 left-[-20px] h-[120%]"
        />

        <div className="relative z-10 flex-1 pr-8 pl-40">
          <h2 className="font-bold text-lg mb-2">About me</h2>
          <p className="text-sm leading-relaxed">
            Hello! My name is Mariana. I'm from Cochabamba, Bolivia. I'm a
            programmer who is passionate about web development. I enjoy building
            meaningful projects, learning new tools, and turning ideas into
            real-world solutions.
          </p>
        </div>
      </div>
      <img src={bg} alt="" className="w-[42rem] absolute bottom-5 -z-20"/>

      <img
        src={item1}
        alt="item"
        className="absolute right-72 -bottom-14 h-72 z-30"
      />
    </section>
  );
};

export default AboutSection;
