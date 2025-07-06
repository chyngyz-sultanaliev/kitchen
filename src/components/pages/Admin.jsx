import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Admin = () => {
  const Dispatch = useDispatch();
  const product = useSelector((s) => s.product);
  console.log(product);

  const [formData, setFormData] = useState({
    url: "",
    des: "",
    name: "",
    count: 1,
    price: "",
    category: "",
  });
  const { url, name, price, category, des } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !url.trim() ||
      !price.trim() ||
      !category.trim() ||
      !des.trim()
    )
      return alert("Заполните все поля !");
    try {
      const res = await axios.post(
        "https://api-crud.elcho.dev/api/v1/3c7d6-27dc0-69f42/kitchen",
        formData
      );
      Dispatch({ type: "CREATE_PRODUCT", payload: res.data });

      setFormData({
        url: "",
        des: "",
        name: "",
        count: 1,
        price: "",
        category: "",
      });
      alert("Товар успешно добавлен");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold ">Add a new product</h2>
        <form onSubmit={handleCreate}>
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
            <div className="sm:col-span-2">
              <label htmlFor="url" className="block mb-2 text-sm font-medium ">
                Product Url
              </label>
              <input
                type="text"
                name="url"
                value={url}
                onChange={handleChange}
                id="url"
                className=" border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-gray-500 bg-[#FFEBCD] dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product Url"
                required=""
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium ">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                id="name"
                className=" border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-gray-500 bg-[#FFEBCD] dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium "
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                value={price}
                onChange={handleChange}
                id="price"
                className=" border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-gray-500 bg-[#FFEBCD] dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium "
              >
                Category
              </label>
              <select
                name="category"
                value={category}
                onChange={handleChange}
                id="category"
                className=" border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-gray-500 bg-[#FFEBCD] dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="" disabled hidden>
                  Select category
                </option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Pastries">Pastries</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium "
              >
                Description
              </label>
              <textarea
                name="des"
                value={des}
                onChange={handleChange}
                id="description"
                rows="8"
                className="block p-2.5 w-full text-sm   rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 text-gray-500 bg-[#FFEBCD] dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="text-white mt-5 bg-[#D2691E] hover:bg-[#DEB887] focus:ring-4 focus:outline-none focus:ring-[#D2691E] font-medium rounded-lg text-sm px-4 py-2 "
          >
            Add product
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
