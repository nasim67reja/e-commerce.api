import { Link } from "react-router-dom";

import SignUpForm from "../components/Authentication/SignUpForm";
const Signup = () => {
  return (
    <>
      <div className=" w-full bg-white py-5 pt-10 shadow-md">
        <div className="mx-auto  max-w-[20rem] md:max-w-[24rem] lg:max-w-[28rem] ">
          <h2 className="mb-6 text-center text-[1.5rem] font-medium text-secondary lg:text-3xl">
            CareoCity
          </h2>
          <div className="mb-8 border border-[#ddd] p-5 xl:p-8">
            <h3 className="mb-6 text-xl font-normal lg:text-2xl">
              Create Account
            </h3>
            <SignUpForm />
            <div className="mt-4 px-2 text-[10px] lg:mt-8 lg:text-xs">
              By continuing, you agree to Careocity's
              <a href="#sd" className="mx-1 text-blue-600">
                Conditions of Use
              </a>
              and Privacy Notice.
            </div>
            <div className="mt-2 text-sm lg:text-base">
              already have an account?
              <Link to="/login" className="ml-1 text-blue-600">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
