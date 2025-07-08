import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import White from "./assets/images/body.png";
import Black from "./assets/images/blackDark.png";
import Footer from "./components/layout/Footer";
import Main from "./components/pages/Main";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Admin from "./components/pages/Admin";
import Category from "./components/pages/Category";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./components/ui/Loading";
import Categories from "./components/ui/Categories";
import Cart from "./components/pages/Cart";

const routes = [
  {
    id: 1,
    path: "/",
    element: <Main />,
  },
  {
    id: 2,
    path: "/admin",
    element: <Admin />,
  },
  {
    id: 3,
    path: "/cart",
    element: <Cart />,
  },
  {
    id: 4,
    path: "/category/:cat",
    element: <Category />,
  },
];
function App() {
  const dark = useSelector((s) => s.dark);
  const [loading, setLoading] = useState(() => {
    return localStorage.getItem("alreadyLoaded") !== "true";
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("alreadyLoaded", "true");
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) return <Loading />;
  return (
    <div
      className="app"
      style={{
        background: `url("${dark ? Black : White}") no-repeat center/30% ${
          dark ? "#191919" : "white"
        }`,
        color: dark ? "white" : "black",
      }}
    >
      <Header />
      <Categories />
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
