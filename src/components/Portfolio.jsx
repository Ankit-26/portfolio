import Image from "next/image";
import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-[100vh] flex pt-20 mb-10  items-center justify-center"
    >
      <div className="w-[60%] max-md:w-[80%] flex flex-col gap-12">
        <h2 className="leading-normal text-blue-600 font-bold text-2xl max-md:text-center">
          MY PROJECTS AND EXPERIENCE
        </h2>
        <div className="flex flex-col gap-32 ">
          <Project
            company
            mediaType={"video"}
            mediaSrc={"/assets/video/42LMS.mp4"}
            projImg={"/assets/icons/lms.png"}
            intro={`This is an online platform which is used by various colleges to manage
          their e-learning activity. This UI is operated by colleges
          Instructors, Students and Administrators.`}
            projTitle={"LMS "}
            skills={[
              "Next.js",
              "React.js",
              "Redux Toolkit",
              "Sass",
              "AntD",
              "Javascript",
              "HTML",
            ]}
          />
          <Project
            code={"https://github.com/Ankit-26/nike"}
            demoLink={"https://luxury-pasca-d9e70b.netlify.app/"}
            mediaType={"image"}
            mediaSrc={"/assets/images/nike.png"}
            projImg={"/assets/icons/nikeIcon.svg"}
            intro={`This is a Nike e-commerce website with responsive good looking design developed using React,tailwind,redux. Major features: Infinite scroll, Wishlist ,Add to Cart etc`}
            projTitle={"Nike"}
            skills={["React.js", "Sass", "HTML", "Tailwind"]}
          />
          <Project
            code={"https://github.com/Ankit-26/dndToDo"}
            demoLink={"https://rainbow-yeot-c20a02.netlify.app/"}
            reverse
            mediaType={"video"}
            mediaSrc={"/assets/video/dndtodo.mp4"}
            projImg={"/assets/icons/todoIcon.gif"}
            intro={`This is a todo list web application with drag and drop functionality. Create your task, Edit your task, delete your task and drag and drop to mark it as complete.`}
            projTitle={"DND Todo"}
            skills={[
              "Next.js",
              "React.js",
              "Redux Toolkit",
              "Javascript",
              "HTML",
              "React Portal",
              "Tailwind",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
