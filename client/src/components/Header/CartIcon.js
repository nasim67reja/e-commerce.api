import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { URL } from "../../App";
import { itemActions } from "../../store/cartItem";
import Loading from "../Reuse/Loading";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteItemFromCart = async () => {
    try {
      await axios.delete(`${URL}/api/v1/carts/${item.cartId}`);
    } catch (error) {
      console.log(`update: `, error);
    }
  };

  const deleteItemHandler = () => {
    dispatch(itemActions.deleteItem(item.id));
    deleteItemFromCart();
  };

  return (
    <div className="relative flex items-center gap-3 border-b border-customBorder pb-3">
      <span
        className="closeIcon absolute -right-2 top-0 cursor-pointer text-black"
        onClick={deleteItemHandler}
      >
        <ion-icon name="close-outline"></ion-icon>
      </span>
      <img
        className="w-16"
        // src={item.image}
        src={`${URL}/Products/${item.categories}/${item.image}`}
        alt={item.name}
        crossOrigin="anonymous"
      />
      <div className="pr-5">
        <h3>{item.name}</h3>
        <p className="text-sm text-[#828282]">$ {item.price}</p>
        <p className="text-sm">quantity : {item.quantity}</p>
      </div>
    </div>
  );
};

const CartIcon = () => {
  const location = useLocation();

  let ovarlayCartIsShown = true;
  if (location.pathname === "/cart") ovarlayCartIsShown = false;

  const cartItems = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);

  const cartTotalItem =
    cartItems &&
    cartItems
      .map((item) => item.quantity)
      .reduce((prev, curv) => prev + curv, 0);
  const totalPrice =
    cartItems &&
    cartItems
      .map((item) => item.price * item.quantity)
      .reduce((prev, cur) => prev + cur, 0);

  let loading = false;
  if (cartItems.length < 1 && user === null) loading = true;

  return (
    <>
      {loading && <Loading height={25} width={25} />}
      {!loading && (
        <li className="group">
          <div className="customI relative translate-y-2 cursor-pointer  pb-2 text-white">
            <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-2 py-[2px] text-xs md:-right-[10px] md:-top-[10px] md:py-[1px] md:text-sm">
              {cartTotalItem}
            </span>
            <Link to="/cart" className="cartIcon inline-block w-6 md:w-7">
              <ion-icon name="cart-outline"></ion-icon>
            </Link>
          </div>
          {ovarlayCartIsShown && (
            <div className="absolute right-2 top-14 z-50 hidden w-96 rounded-sm bg-white px-6 py-6 text-primary shadow-md group-hover:block">
              <div className="flex flex-col   ">
                {cartItems.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>
              <div className="flex justify-between ">
                <h2 className="mb-4 font-semibold">SUBTOTAL</h2>
                <p className="text-[#828282]">$ {totalPrice}</p>
              </div>
              <Link
                to="/cart"
                className=" float-right rounded-sm border border-customBorder bg-blue-600 px-3 py-1 text-white transition-all hover:bg-white hover:text-primary"
              >
                view cart
              </Link>
            </div>
          )}
        </li>
      )}
    </>
  );
};

export default CartIcon;
