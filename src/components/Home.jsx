import Image from "next/image";
import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="min-h-[75vh] flex max-lg:mb-20 max-lg:mt-10 items-center justify-center"
    >
      <div className="w-[60%] max-md:w-[80%] flex gap-12 max-md:flex-col-reverse max-md:items-center">
        <div>
          <h1 className="font-extrabold text-5xl leading-snug font-[sans-serif] break-keep max-md:text-center">
            Front-End Ract (Next.js) Developer 👋🏻
          </h1>
          <p className="mt-3 leading-normal text-lg text-slate-gray max-md:text-center">
            {`Hi, I'm Ankit Sharma. A passionate Front-End React (Next.js)
            developer with 3+ years of experience based in Bengaluru, India.`}
            📍
          </p>
          <div className="my-4 flex gap-4 items-center max-md:justify-center">
            <a href="https://www.linkedin.com/in/ankit-sharma-0b9200192/">
              <Image
                src="/assets/icons/linkedin-logo.svg"
                width={30}
                height={30}
                alt={"Linkedin Profile"}
              />
            </a>
            <a href="https://github.com/Ankit-26">
              <Image
                src="/assets/icons/git.svg"
                width={30}
                height={30}
                alt={"Github"}
              />
            </a>
            <a
              className="link-anim cursor-pointer items-center text-xl whitespace-nowrap leading-relaxed pb-1 font-semibold flex gap-2"
              href={"/assets/pdfs/Resume.pdf"}
              download
            >
              <span>Download Resume</span>
            </a>
          </div>
          <div className="flex mt-4 gap-4 items-center flex-wrap max-md:flex-col">
            <span className="font-semibold break-keep">Tech Stack | </span>
            <div className="flex gap-3">
              <Image
                src="/assets/icons/html.svg"
                width={30}
                height={30}
                alt={"HTML"}
              />
              <Image
                src="/assets/icons/sass.svg"
                width={30}
                height={30}
                alt={"Sass"}
              />
              <Image
                src="/assets/icons/javascript.svg"
                width={30}
                height={30}
                alt={"Javascript"}
              />
              <Image
                src="/assets/icons/react.png"
                width={30}
                height={30}
                alt={"React"}
              />
              <Image
                src="/assets/icons/nextjs.png"
                width={30}
                height={30}
                alt={"Next.js"}
              />
              <Image
                src="/assets/icons/tailwind.svg"
                width={30}
                height={30}
                alt={"Tailwind"}
              />
              <Image
                src="/assets/icons/redux.svg"
                width={30}
                height={30}
                alt={"Redux"}
              />
            </div>
          </div>
        </div>
        <img
          src={"/assets/images/profile-pic.png"}
          className="pic-animation"
        ></img>
      </div>
    </section>
  );
}

export default Home;
