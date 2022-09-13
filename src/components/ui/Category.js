import React from "react";

export default function Category({ category: { id, title, image } }) {
  return (
    <li
      key={id}
      className="flex justify-center w-full h-[108px] group transition-colors md:hover:bg-category-hover"
    >
      <a href="#" className="w-full flex flex-col justify-center items-center">
        <figure className="border border-gray-200 w-12 h-12 rounded-md overflow-hidden">
          <img src={image} alt={title} className="w-full h-full" />
        </figure>
        <span className="mt-3 text-sm text-center font-bold text-gray-700 tracking-tight group-hover:text-primary-brand-color">
          {title}
        </span>
      </a>
    </li>
  );
}
