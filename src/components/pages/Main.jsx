import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../ui/ProductCard";
import { Link } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const products = useSelector((s) => s.product);
  console.log(products);
  const categories = ["Breakfast", "Lunch", "Pastries", "Drinks"];

  function getProduct() {
    return async (dispatch) => {
      let res = await axios(
        `https://api-crud.elcho.dev/api/v1/3c7d6-27dc0-69f42/kitchen`
      );
      let { data } = res;
      dispatch({ type: "SET_PRODUCTS", payload: data });
    };
  }

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <div className="container flex flex-col gap-10 py-12">
      <h1 className="text-xl text-center font-bold ">Categories</h1>
      <div className="flex justify-center gap-20">
        {categories.map((el) => (
          <Link
            to={`category/${el}`}
            className="text-white bg-[#A0522D]/40 backdrop-blur-sm hover:bg-[#DEB887] focus:ring-4 focus:outline-none focus:ring-[#D2691E] font-medium rounded-lg text-sm px-4 py-2 "
          >
            {el}
          </Link>
        ))}
      </div>
      <div className="flex justify-center flex-wrap gap-10 items-center">
        {products.map((el) => (
          <ProductCard product={el} key={el._id} />
        ))}
      </div>
    </div>
  );
};

export default Main;
