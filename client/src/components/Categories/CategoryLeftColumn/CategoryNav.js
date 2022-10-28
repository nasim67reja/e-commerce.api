import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { URL } from "../../../App";
import Loading from "../../Reuse/Loading";

const CategoryNav = () => {
  const [category, setCategory] = useState("");
  const location = useLocation();
  const getProductCategory = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${URL}/api/v1/products/product-category`
      );
      setCategory(data.data.category);
    } catch (error) {
      console.log(`error: `, error);
    }
  }, []);

  useEffect(() => {
    getProductCategory();
  }, [getProductCategory]);
  let loading = false;
  if (!category) loading = true;

  const [topRatedProductIsOpen, setTopRatedProductIsOpen] = useState(true);

  return (
    <>
      {loading && (
        <div className="flex h-32 items-center justify-center gap-2">
          <Loading height="15" width="15" />
          <div>Loading..</div>
        </div>
      )}
      {!loading && (
        <div className="mb-8 border border-customBorder bg-white ">
          <div
            className="relative  cursor-pointer p-2"
            onClick={() => setTopRatedProductIsOpen((prevSt) => !prevSt)}
          >
            <h3 className="py-2 px-4 text-xl font-medium text-blue-600">
              Category
            </h3>
            <span className="absolute right-3 top-5">
              {topRatedProductIsOpen ? (
                <ion-icon name="chevron-up-outline"></ion-icon>
              ) : (
                <ion-icon name="chevron-down-outline"></ion-icon>
              )}
            </span>
          </div>

          <ul
            className={`flex flex-col gap-2 overflow-hidden transition-all duration-300  ${
              topRatedProductIsOpen ? "h-56 py-4" : "h-0 py-0"
            } `}
          >
            {category &&
              category.map((el, i) => (
                <li key={i} className="border-b border-customBorder">
                  <NavLink
                    // to={`/${el._id}`}
                    to={`/${el._id}${location.search}`}
                    className="block w-full  py-2 px-4"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "red" : "",
                      };
                    }}
                  >
                    {el._id}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default CategoryNav;
