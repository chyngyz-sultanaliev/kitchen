import React from "react";
import Typewriter from "typewriter-effect";
import logo from "../../assets/images/blackDark.png";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#A0522D]">
      <div className="font-mono flex items-center flex-col justify-center gap-10  text-[#fff] text-3xl">
        <img src={logo} alt="Логотип" className="w-60  animate-pulse" />
        <Typewriter
          options={{
            strings: [
              "Добро пожаловать в Kitchen Kafe!",
              "Приятного аппетита!",
              "Мы рады вас видеть!",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
            pauseFor: 500,
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
