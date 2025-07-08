import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../ui/ProductCard";
import { Link } from "react-router-dom";
import Categories from "../ui/Categories";

const Main = () => {
  const dispatch = useDispatch();
  const products = useSelector((s) => s.product);

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
      <div className="container flex justify-center py-6 flex-wrap gap-10 items-center">
        {products.map((el) => (
          <ProductCard product={el} key={el._id} />
        ))}
      </div>
  );
};

export default Main;
