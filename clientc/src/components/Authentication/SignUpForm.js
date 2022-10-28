import axios from "axios";
import { URL } from "../../App";
import { useState } from "react";
import { Bars } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import useForm from "../../hook/useForm";

const SignUpForm = () => {
  const navigate = useNavigate();

  const {
    value: enteredName,
    valueInputHasError: nameInputHasError,
    setValueInputHasError: setNameInputHasError,
    enteredValueIsValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
  } = useForm((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    valueInputHasError: emailInputHasError,
    setValueInputHasError: setEmailInputHasError,
    enteredValueIsValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
  } = useForm((value) => value.includes("@"));

  const {
    value: enteredPassword,
    valueInputHasError: passwordInputHasError,
    setValueInputHasError: setPasswordInputHasError,
    enteredValueIsValid: enteredPasswordIsValid,
    valueChangeHandler: passwordChangeHandler,
  } = useForm((value) => value.length > 5);
  const {
    value: enteredPasswordConfirm,
    valueInputHasError: password2InputHasError,
    setValueInputHasError: setPassword2InputHasError,
    enteredValueIsValid: enteredPassword2IsValid,
    valueChangeHandler: password2ChangeHandler,
  } = useForm((value) => value.length > 5);

  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [successful, setSuccessful] = useState("");

  const signUpPostCall = async () => {
    try {
      await axios.post(`${URL}/api/v1/users/signup`, {
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
        passwordConfirm: enteredPasswordConfirm,
      });
      setIsloading(false);
      setSuccessful("Sign Up successfully");

      setTimeout(() => {
        navigate("/");
        document.location.reload();
        setSuccessful("");
      }, 1000);
    } catch (error) {
      // console.log(`error: `, error);
      setIsloading(false);
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) setNameInputHasError(true);
    if (!enteredEmailIsValid) setEmailInputHasError(true);
    if (!enteredPasswordIsValid) setPasswordInputHasError(true);
    if (!enteredPassword2IsValid) setPassword2InputHasError(true);

    if (
      !enteredPasswordIsValid ||
      !enteredEmailIsValid ||
      !enteredNameIsValid ||
      !enteredPassword2IsValid
    )
      return;

    setIsloading(true);

    signUpPostCall();
  };

  // const signUpPostCall = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://127.0.0.1:8000/api/v1/users/signup",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name: enteredName,
  //           email: enteredEmail,
  //           password: enteredPassword,
  //           passwordConfirm: enteredPasswordConfirm,
  //         }),
  //       }
  //     );

  //     const data = await response.json();
  //     setError(data.message);

  //     if (data.status === "success") {
  //       setTimeout(() => {
  //         navigate("/");
  //         document.location.reload();
  //         // window.location.assign("/");
  //       }, 1500);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setError("Something wrong !");
  //   }
  // };

  return (
    <form
      onSubmit={formSubmissionHandler}
      className="custom-form flex flex-col  gap-3 lg:gap-4"
    >
      <div className="flex flex-col text-sm lg:text-base">
        <label htmlFor="text">Your name</label>
        <input
          autoFocus
          type="text"
          id="text"
          name="name"
          onChange={nameChangeHandler}
          value={enteredName}
          className="mt-2 rounded-lg border border-loginBorder p-2 text-xs lg:text-base"
        />
        {nameInputHasError && (
          <p className="mt-2 text-xs text-red-600 lg:text-sm">
            Please provide your email
          </p>
        )}
      </div>

      <div className="flex flex-col text-sm lg:text-base">
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          className="mt-2 rounded-lg border border-loginBorder p-2 text-xs lg:text-base"
        />
        {emailInputHasError && (
          <p className="mt-2 text-xs text-red-600 lg:text-sm">
            Please provide your email
          </p>
        )}
      </div>

      <div className="flex flex-col text-sm lg:text-base">
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={passwordChangeHandler}
          value={enteredPassword}
          className="mt-2 rounded-lg border border-loginBorder p-2 text-xs lg:text-base"
        />
        {passwordInputHasError && (
          <p className="mt-2 text-xs text-red-600 lg:text-sm">
            Please provide your password
          </p>
        )}
      </div>

      <div className="flex flex-col text-sm lg:text-base">
        <label htmlFor="password2">Re-enter password</label>
        <input
          type="password"
          id="password2"
          name="password2"
          onChange={password2ChangeHandler}
          value={enteredPasswordConfirm}
          className="mt-2 rounded-lg border border-loginBorder p-2 text-xs lg:text-base"
        />
        {password2InputHasError && (
          <p className="mt-2 text-xs text-red-600 lg:text-sm">
            Please provide your Confirm password
          </p>
        )}
      </div>

      <div className="form-actions">
        {/* <button
          type="submit"
          className="mt-2 w-full rounded-lg border border-loginBorder bg-gradient-to-b from-gradientFrom to-gradientTo py-1 text-sm lg:mt-4 lg:py-2  lg:text-base"
        >
          Sign Up
        </button> */}
        <button
          type="submit"
          className={`mt-2 w-full justify-center rounded-lg  border  py-1 text-sm lg:mt-4 lg:py-2  lg:text-base ${
            isLoading
              ? "flex cursor-not-allowed border-[#ccc] bg-[#ccc]"
              : "border-loginBorder bg-gradient-to-b from-gradientFrom to-gradientTo"
          }`}
        >
          {isLoading ? (
            <Bars
              height="24"
              width="80"
              // color="#4fa94d"
              color="#21dd1e"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            "Sign Up"
          )}
        </button>
      </div>

      {/* {error && (
        <p className="flex w-fit gap-2 bg-red-50 px-3 text-sm text-red-600">
          <span>
            <ion-icon name="warning-outline"></ion-icon>
          </span>
          <span>{error}</span>
        </p>
      )} */}

      {error && (
        <p className=" absolute top-0 left-0 flex w-full justify-center gap-2 bg-red-500 px-3 py-2 text-xs text-white md:text-sm lg:text-lg">
          <span className="translate-y-[2px]">
            <ion-icon name="warning-outline"></ion-icon>
          </span>
          <span>{error}</span>
        </p>
      )}
      {successful && (
        <p className=" absolute top-0 left-0 flex w-full justify-center gap-2 bg-green-500 px-3 py-2  text-xs text-white md:text-sm lg:text-lg">
          <span className="translate-y-[2px]">✔</span>
          <span>{successful}</span>
        </p>
      )}
    </form>
  );
};

export default SignUpForm;
