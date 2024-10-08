import React from "react";
import AboutAnimation from "./AboutAnimation";

function About() {
  return (
    <section
      id="about"
      className="min-h-[60vh]  max-lg:pt-32 flex mb-20  items-center justify-center "
    >
      <div className="w-[60%] max-md:w-[80%] flex gap-12 max-lg:flex-col lg:items-end max-md:items-center">
        <div className="max-lg:w-[60%] max-md:flex max-md:flex-col  ">
          <h2 className="leading-normal text-blue-600 font-bold text-2xl lg:hidden max-md:text-center">
            ABOUT ME
          </h2>
          <AboutAnimation />
        </div>
        <div className="flex flex-col flex-1 ">
          <h2 className="leading-normal text-blue-600 font-bold text-2xl max-lg:hidden ">
            ABOUT ME
          </h2>
          <p className="leading-normal text-lg font-semibold break-words max-md:text-center">
            A passionate Front-End React (Next.js) developer based in Bengaluru,
            India. 📍
          </p>
          <p className="mt-1 text-slate-gray text-left max-md:text-justify">
            {`I'm a front-end developer with 3.5+ years of experience, I possess an
            impressive arsenal of skills in Next.js, React.js, Javascript, Sass,
            Tailwind, Redux Toolkit, etc. My expertise lies in crafting dynamic,
            engaging interfaces through writing optimized and clean code and
            using cutting-edge development tools and techniques. I'm also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.`}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
