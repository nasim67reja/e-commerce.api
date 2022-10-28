import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { overlayActions } from "../../store/ovarlay";

const ReviewOvarlay = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const params = useParams();
  const products = useSelector((state) => state.allProducts.allProducts);
  // if (!products) return;
  const [product] = products
    ? products.filter((product) => product.name === params.productId)
    : "";
  // console.log(product?._id);

  const dispatch = useDispatch();
  const reviewOvarlayIsVisible = useSelector(
    (state) => state.overlay.reviewOvarlayIsVisible
  );

  //   http://127.0.0.1:8000/api/v1/products/631ed0b0406aefd50ab6c19b/reviews
  const postReview = async () => {
    try {
      const { data } = await axios.post(
        `http://127.0.0.1:8000/api/v1/products/${product?._id}/reviews`,
        {
          review: review,
          rating: +rating,
        }
      );
      // console.log(data);
      if (data.status === "success") {
        setTimeout(() => {
          document.location.reload();
        }, 1500);
      }
    } catch (error) {
      console.log(`error: `, error.response);
      //   setError(error.response.data.message);
    }
  };
  const fromSubmissionHandler = (event) => {
    event.preventDefault();
    postReview();
  };
  return (
    <>
      {reviewOvarlayIsVisible && (
        <div className="fixed top-[30vh] left-[10%] z-20 w-[80%] rounded-sm bg-white shadow-lg md:left-[30vw]  md:w-[50%] xl:w-[40%]">
          <div className="relative p-6">
            <span
              className="absolute right-2 top-2 cursor-pointer"
              onClick={() => {
                dispatch(overlayActions.backdropHidden());
                dispatch(overlayActions.reviewOvarlayIsHidden());
              }}
            >
              <ion-icon name="close-outline" size="large"></ion-icon>
            </span>
            <form onSubmit={fromSubmissionHandler}>
              <h2 className="my-6 text-center text-2xl font-semibold text-secondary">
                So you wanna leave Review ?
              </h2>
              <div className="mb-4 flex flex-col">
                <label htmlFor="rating">Leave Rating</label>
                <input
                  autoFocus
                  type="number"
                  id="rating"
                  name="email"
                  min="1"
                  max="5"
                  step="any"
                  className="mt-2 rounded-lg border border-loginBorder p-2 focus:outline-none"
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              <div className="flex flex-col rounded-sm border border-black">
                <label htmlFor="review" className="opacity-0">
                  Your E-Mail
                </label>
                <textarea
                  rows="5"
                  className="px-4 focus:outline-none"
                  aria-invalid="false"
                  data-purpose="review-content"
                  placeholder="Tell us about your own personal experience taking this Product. Was it a good match for you?"
                  id="review"
                  onChange={(e) => setReview(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className=" float-right mt-4 mb-4 rounded-sm bg-secondary py-2 px-4 text-white"
              >
                save review
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewOvarlay;
