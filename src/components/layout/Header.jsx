import React from "react";
import { BiMoon, BiSearch, BiSun } from "react-icons/bi";
import { FaCartArrowDown, FaEye, FaEyeSlash, FaUserLock } from "react-icons/fa";
import Black from "../../assets/images/blackDark.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { LiaDoorOpenSolid } from "react-icons/lia";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [eye, seteEye] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const nav = useNavigate();
  const dark = useSelector((s) => s.dark);
  const Dispatch = useDispatch();
  function Login() {
    if (password === "admin123" || email === "admin") {
      nav("/admin");
      setModal(!modal);
    } else {
      alert("Такой пользователь не сущетвует!");
      setEmail("");
      setPassword("");
    }
  }

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
              className="w-full p-3 ps-10 text-sm text-gray-500 bg-[#FFEBCD] rounded-lg"
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
        {!modal ? (
          <a onClick={() => setModal(!modal)}>
            <FaUserLock />
          </a>
        ) : (
          <a onClick={() => setModal(!modal)}>
            <LiaDoorOpenSolid />
          </a>
        )}
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

      {modal && (
        <div
          onClick={() => setModal(!modal)}
          className="fixed  z-50 flex justify-center items-center w-full inset-0 bg-[#000]/40 backdrop-blur-sm "
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative  rounded-lg shadow-sm bg-[#A0522D]/40"
            >
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Sign in to admin
                </h3>
                <button
                  onClick={() => setModal(!modal)}
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <IoCloseSharp />
                </button>
              </div>
              <div className="p-4 md:p-5">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="text"
                      className="block w-full py-3 pl-4 text-sm text-gray-500 bg-[#FFEBCD] rounded-lg"
                      placeholder="Name"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your password
                    </label>
                    <input
                      type={eye ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      placeholder="••••••••"
                      className="w-full p-3 pl-4 text-sm text-gray-500 bg-[#FFEBCD] rounded-lg"
                    />
                    <a
                      onClick={() => seteEye(!eye)}
                      className="absolute top-9 right-3 text-[#A0522D] text-2xl "
                    >
                      {eye ? <FaEye /> : <FaEyeSlash />}
                    </a>
                  </div>

                  <button
                    onClick={() => Login()}
                    className="w-full bg-[#D2691E] hover:bg-[#DEB887] focus:ring-4 focus:outline-none focus:ring-[#D2691E] font-medium rounded-lg text-sm px-4 py-2 "
                  >
                    Login to your admin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
