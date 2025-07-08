import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = ["Breakfast", "Lunch", "Pastries", "Drinks"];

  return (
    <div className="flex justify-center gap-20 py-8">
      {categories.map((el,idx) => (
        <Link
          to={`category/${el}`}
          key={idx}
          className="text-white bg-[#A0522D]/40 backdrop-blur-sm hover:bg-[#DEB887] focus:ring-4 focus:outline-none focus:ring-[#D2691E] font-medium rounded-lg text-sm px-4 py-2 "
        >
          {el}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
