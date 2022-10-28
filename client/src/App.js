import { Fragment, useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/CartPage";
import CartPage from "./pages/CartPage";
import MainBody from "./components/MainBody/MainBody";
import AccountInfo from "./components/Account/AccountInfo/AccountInfo";
import Profile from "./components/Account/AccountInfo/Profile";
import { productsActions } from "./store/allProducts";
import { itemActions } from "./store/cartItem";
import { userActions } from "./store/currentUser";
import { overlayActions } from "./store/ovarlay";

axios.defaults.withCredentials = true; //it's for getting and storing cookies in browser for future request

// export const URL = "https://careocity-ecommerce.onrender.com";
// export const URL = "http://127.0.0.1:8000";
// export const URL = "https://careocityapps.herokuapp.com";
export const URL = null;
console.log(`${URL}/api/v1/users/me`);

export default function App() {
  const dispatch = useDispatch();
  const curUserId = useSelector((state) => state.user.user)?.data.data.id;

  const getUser = useCallback(async () => {
    try {
      const { data } = await axios.get(`${URL}/api/v1/users/me`);
      dispatch(userActions.storeUser(data));
    } catch (error) {
      dispatch(userActions.storeUser(undefined));

      // console.log(`error: `, error);
    }
  }, [dispatch]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const fetchAllCartItem = useCallback(async () => {
    if (curUserId) {
      try {
        const { data } = await axios.get(
          `${URL}/api/v1/users/${curUserId}/carts`
        );
        data.data.data.forEach((el) => {
          dispatch(
            itemActions.storeItemFromServer({
              cartId: el.id,
              id: el.product.id,
              image: el.product.images[0],
              name: el.product.name,
              categories: el.product.categories,
              rating: el.product.ratingsAverage,
              price: el.product.price,
              quantity: el.quantity,
              change: false,
              new: true,
            })
          );
        });
      } catch (error) {
        console.log(`error: `, error);
      }
    }
  }, [dispatch, curUserId]);

  const fetchAllProductsHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(`${URL}/api/v1/products`);
      data.data.data.forEach((el) => {
        dispatch(productsActions.storeProducts(data.data.data));
      });
    } catch (error) {
      console.log(`error: `, error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchAllProductsHandler();
    fetchAllCartItem();
  }, [fetchAllProductsHandler, fetchAllCartItem]);

  const accountHandler = (e) => {
    if (!e.target.closest(".closets"))
      dispatch(overlayActions.accountMenuController(false));
  };
  return (
    <Fragment>
      <div onClick={accountHandler}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<MainBody />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="account" element={<Account />}>
              <Route index element={<Profile />} />
              <Route path=":accountId" element={<AccountInfo />} />
            </Route>
            <Route path=":categoriesId" element={<Categories />}></Route>
            <Route
              path=":categoriesId/:productId"
              element={<ProductDetails />}
            ></Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<div>Invalid route</div>} />
        </Routes>
      </div>
    </Fragment>
  );
}
