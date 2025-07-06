import React from "react";
import { ShoppingCart, Tag, Layers } from "lucide-react";

const ProductCard = ({ product }) => {
  const { url, name, price, category, des } = product;

  return (
    <div className="border border-[#A0522D] rounded-2xl w-70 p-4 shadow-md bg-[#A0522D]/40 backdrop-blur-sm  hover:shadow-lg transition-all">
      <img
        src={url}
        alt={name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>

      <div className="flex items-center text-sm  mb-1">
        <Layers className="w-4 h-4 mr-2 text-blue-500" />
        <span>Категория: {category}</span>
      </div>

      <div className="flex items-center text-sm  mb-1">
        <Tag className="w-4 h-4 mr-2 text-green-500" />
        <span>Цена: ${price}</span>
      </div>

      {des && (
        <p className=" text-sm mt-2 mb-3 line-clamp-3">
          {des.slice(0, 30)}...
        </p>
      )}

      <button className="flex items-center justify-center gap-2 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
        <ShoppingCart className="w-5 h-5" />
        <span>Добавить в корзину</span>
      </button>
    </div>
  );
};

export default ProductCard;
