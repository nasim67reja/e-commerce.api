import axios from "axios";
import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../../../store/cartItem";
import { URL } from "../../../App";

const AddToCart = ({ product, quantity }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const [activeItem] = cartItems.filter((item) => item.change === true);

  let item = {
    id: product._id,
    image: product.images[0],
    name: product.name,
    categories: product.categories,
    rating: product.ratingsAverage,
    price: product.price,
    quantity,
    change: false,
    new: true,
  };
  const [addCart, setAddCart] = useState(false);

  const postCartItem = useCallback(async () => {
    if (activeItem) {
      if (addCart && activeItem.new) {
        try {
          await axios.post(`${URL}/api/v1/carts`, {
            product: activeItem.id,
            quantity: activeItem.quantity,
          });
          setTimeout(() => {
            document.location.reload();
          }, 500);
        } catch (error) {
          console.log(`error: `, error.response);
        }
      } else if (!activeItem.new) {
        try {
          await axios.patch(`${URL}/api/v1/carts/${activeItem.cartId}`, {
            quantity: activeItem.quantity,
          });
        } catch (error) {
          console.log(`update: `, error);
        }
      }
    }
  }, [addCart, activeItem]);
  useEffect(() => {
    postCartItem();
  }, [postCartItem]);

  const addtoCartHandler = () => {
    dispatch(itemActions.storeItem(item));
    setAddCart(true);
  };
  return (
    <button
      className="flex items-center gap-2 rounded-sm border border-orange-400 py-2 px-4 text-sm transition-all hover:bg-blue-500 hover:text-white"
      onClick={addtoCartHandler}
    >
      <span className="block translate-y-[2px]">
        <ion-icon name="cart-outline"></ion-icon>
      </span>
      <span> Add to Cart</span>
    </button>
  );
};

export default AddToCart;
