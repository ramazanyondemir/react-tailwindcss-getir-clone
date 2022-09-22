import React, { useState } from "react";
import categoryData from "../api/categories.json";
import Category from "./ui/Category";
import Title from "./ui/Title";

export default function Categories() {
  const [categories, setCategories] = useState(categoryData);

  return (
    <div className="bg-white py-6 md:px-5 shadow-md shadow-gray-200">
      <div className="container mx-auto">
        <div className="pl-4 md:pl-0">
          <Title>Kategoriler</Title>
        </div>
        <ul className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 lg:gap-4">
          {categories.map((category, id) => (
            <Category category={category} key={id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
