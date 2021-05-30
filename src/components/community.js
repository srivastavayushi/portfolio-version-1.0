import React from "react";

export default function Community({ name, image }) {
  return (
    <button className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  text-white tracking-wider rounded-t">
      <img src={image} alt=" " className="w-5 h-5 mr-3" />
      {name}
    </button>
  );
}
