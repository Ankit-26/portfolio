import Image from "next/image";
import React from "react";

function Project({
  skills,
  intro,
  mediaType,
  mediaSrc,
  projTitle,
  reverse,
  company,
  demoLink,
  code,
}) {
  return (
    <div
      className={
        "flex gap-5 mb-5 max-md:flex-col" + (reverse ? " flex-row-reverse" : "")
      }
    >
      <div className="flex-1 ">
        {mediaType == "image" ? (
          <div>
            <Image
              src={mediaSrc}
              alt={"Project Image"}
              height={100}
              width={490}
              className="max-md:w-full"
            />
          </div>
        ) : (
          <video
            className="w-full h-full rounded-md border-2 border-slate-gray outline-none"
            controls
          >
            <source src={mediaSrc} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex gap-2 justify-center items-center leading-normal font-bold text-center max-md:hidden">
          <span className="text-xl">{projTitle}</span>
          {company && <span>({company})</span>}
        </div>
        <p className="mt-1 text-slate-gray text-left">{intro}</p>
        <div className="flex gap-2 mt-5">
          <span className=" text-lg font-medium">Skills: </span>{" "}
          <div className="flex flex-wrap gap-y-2">
            {skills.map((skill, index) => {
              return (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 text-xm font-medium mr-2 px-3 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
        {demoLink && (
          <div className="mt-8 flex gap-5 items-center justify-center max-md:justify-center">
            <a
              className="flex gap-1 items-center"
              href={demoLink}
              target="_blank"
            >
              Live Demo
              <Image
                src="/assets/icons/link.png"
                width={20}
                height={20}
                alt={"link"}
              />
            </a>
            <a className="flex gap-1 items-center" href={code} target="_blank">
              Code
              <Image
                src="/assets/icons/git.svg"
                width={30}
                height={30}
                alt={"Github"}
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
