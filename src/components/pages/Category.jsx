import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../ui/ProductCard";
import axios from "axios";

const Category = () => {
  const { cat } = useParams();
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
    <div className="container py-12">
      <h1 className="text-xl text-left font-bold ">Category / {cat}</h1>
      <div className=" py-6 flex justify-center flex-wrap gap-10 items-center">
        {products.map((el) => {
          return el.category === cat ? (
            <ProductCard product={el} key={el._id} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Category;
