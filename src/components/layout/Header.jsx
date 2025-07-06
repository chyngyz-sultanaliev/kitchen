import React from "react";
import { BiMoon, BiSearch, BiSun } from "react-icons/bi";
import { FaCartArrowDown, FaUser } from "react-icons/fa";
import Black from "../../assets/images/blackDark.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Header = () => {
  const dark = useSelector((s) => s.dark);
  const Dispatch = useDispatch();
  return (
    <header className="p-6 bg-[#A0522D]/40 ">
      <div className="container  flex  gap-10  items-center text-[#F5FFFA] text-xl font-medium  ">
        <div className="w-14 ">
          <Link to={"/"}>
            <img src={Black} className="cover w-full" alt="" />
          </Link>
        </div>
        <form className="w-200 mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 text-[#D2691E] start-0 flex items-center ps-3 pointer-events-none">
              <BiSearch />
            </div>
            <input
              type="search"
              className="block w-full p-3 ps-10 text-sm text-gray-500 bg-[#FFEBCD] rounded-lg"
              placeholder="Search..."
            />
            <button
              type="submit"
              className="text-white absolute end-1 bottom-1 bg-[#D2691E] hover:bg-[#DEB887] focus:ring-4 focus:outline-none focus:ring-[#D2691E] font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
        <Link to={"/admin"}>
          <FaUser />
        </Link>
        <Link to={"/cart"}>
          <FaCartArrowDown />
        </Link>
        {!dark ? (
          <a onClick={() => Dispatch({ type: "DARK_WHITE" })} href="#">
            <BiSun />
          </a>
        ) : (
          <a onClick={() => Dispatch({ type: "DARK_BLACK" })}>
            <BiMoon />
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
