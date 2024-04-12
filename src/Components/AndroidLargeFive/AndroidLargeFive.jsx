import React, { useState } from "react";
import status from "../../assets/statusbar.png";
import { Link } from "react-router-dom";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AndroidLargeFive = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="my-8">
      <h1 className="text-center text-4xl font-bold mb-6">Android Large - 5</h1>
      <div className="layout pb-8 pt-4">
        <div className="flex justify-between ps-6 pe-3 mb-6">
          <h4 className="font-semibold text-[15px] text-center time">9:41</h4>
          <img src={status} className="status-img" alt="" />
        </div>
        <div className="px-3">
          <h1 className="font-semibold text-[20px] create-account mb-8">
            Welcome Back
          </h1>
          <form action="">
            <div>
              <input
                type="email"
                className="input py-[10px] px-4 w-full mb-6 text-[12px] font-semibold h-[50px]"
                placeholder="Email"
              />
              <div className="relative -mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input py-[10px] px-4 w-full mb-6 text-[12px] font-semibold h-[50px]"
                  placeholder="Password"
                />

                <span
                  className="absolute right-3 top-[26px] transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <p className="underline checkbox-text font-medium text-[12px]">
                Forgot your password?
              </p>
              <div className="mt-52 mb-4">
                <button className="button rounded-xl py-4 w-full text-[16px] font-semibold">
                  Sign In
                </button>
              </div>
              <div className="divider font-medium text-[12px] mb-5">Or</div>
              <div className="flex justify-center items-center mb-6">
                <button className="social-icon-btn rounded-lg flex justify-center items-center">
                  <img src={google} alt="" />
                </button>
                <button className="social-icon-btn rounded-lg flex justify-center items-center ms-5">
                  <img src={facebook} alt="" />
                </button>
              </div>
              <p className="text-[12px] font-medium text-center already-account">
                Don’t have an account yet?
                <Link to="/register" className="underline link ms-1">
                  Create an account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AndroidLargeFive;
