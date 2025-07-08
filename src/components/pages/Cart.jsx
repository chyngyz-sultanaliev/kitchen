import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ui/ProductCard";

const Cart = () => {
  const  cart  = useSelector((state) => state.cart);
  const targetTotalPrice = cart.reduce(
    (acc, el) => acc + Number(el.price) * (el.quantity ?? 1),
    0
  );

  return (
    <div className="">
      <div className="container flex justify-center py-6 flex-wrap gap-10 items-center">
        {cart.map((el) => (
          <ProductCard product={el} key={el._id}     />
        ))}
      </div>
      <h1 className="text-2xl m-auto mb-10 text-center border border-[#A0522D] rounded-2xl w-70 p-4 shadow-md bg-[#A0522D]/40">
        Total Price ${targetTotalPrice}
      </h1>
    </div>
  );
};

export default Cart;
