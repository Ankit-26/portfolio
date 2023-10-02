import React from "react";

function Button({ label, iconURl, style = "" }) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-4 py-2 font-montserrat text-lg leading-none rounded-full border-[1px]  ${
        style ? style : "bg-coral-red  text-white border-coral-red"
      }`}
    >
      {label}
      {iconURl && (
        <img
          src={iconURl}
          alt="arrow-right"
          className="ml-2 rounded-full w-5 h-5"
        ></img>
      )}
    </button>
  );
}

export default Button;
