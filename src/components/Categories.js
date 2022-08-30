import React, { useState } from "react";
import categoryData from "../api/categories.json";
import Category from "./ui/Category";
import Title from "./ui/Title";

export default function Categories() {
  const [categories, setCategories] = useState(categoryData);

  return (
    <div className="bg-white py-6 shadow-md shadow-gray-200	">
      <div className="w-[1232px] mx-auto">
        <Title>Kategoriler</Title>
        <ul className="grid grid-cols-10 gap-4">
          {categories.map((category, id) => (
            <Category category={category} key={id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
