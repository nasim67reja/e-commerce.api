import { Fragment } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/Authentication/LoginForm";
import "./login.css";

const Login = () => {
  return (
    <Fragment>
      <div className="w-full bg-white py-5 pt-8 shadow-md">
        <div className="mx-auto max-w-[20rem] md:max-w-[24rem] lg:max-w-[24rem] 2xl:max-w-[28rem]">
          <h2 className="mb-6 text-center text-[1.5rem]  font-medium text-secondary 2xl:text-3xl">
            CareoCity
          </h2>
          <div className="mb-8 border border-[#ddd] p-5 lg:p-8">
            <h3 className="mb-6 text-xl font-normal 2xl:text-2xl">Log in</h3>
            <LoginForm></LoginForm>
            <div className="mt-4 px-2 text-[10px] 2xl:mt-8 2xl:text-xs">
              By continuing, you agree to Careocity's
              <a href="#sd" className="mx-1 text-blue-600">
                Conditions of Use
              </a>
              and Privacy Notice.
            </div>
            <div>
              <a
                href="#o"
                className="mt-2 block text-center text-xs text-blue-600 2xl:mt-4 2xl:text-sm"
              >
                forgot your password ?
              </a>
            </div>
          </div>
          <div className="a-divider a-divider-break">
            <h5>New to Careocity?</h5>
          </div>
          <Link
            to="/signup"
            className="mt-4 block w-full rounded-md border border-loginBorder bg-[#e7e9ec96] py-1 text-center text-sm transition-all hover:bg-[#e7e9ec] 2xl:mt-8 2xl:py-2 2xl:text-base"
          >
            Create your Careocity account
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
