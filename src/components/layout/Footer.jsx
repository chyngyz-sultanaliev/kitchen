import React from "react";
import Black from "../../assets/images/blackDark.png";

const Footer = () => {
  return (
    <div className="p-2 bg-[#A0522D]/40 ">
      <div className="container  flex justify-center gap-10  items-center text-[#FFFAFA] text-xl font-medium  ">
        <div className="w-18 ">
          <img src={Black} className="cover w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
