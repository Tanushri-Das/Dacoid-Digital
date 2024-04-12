import "./AndroidLargeFour.css";
import status from "../../assets/statusbar.png";
import { Link } from "react-router-dom";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";

const AndroidLargeFour = () => {
  return (
    <div className="my-8">
      <h1 className="text-center text-4xl font-bold mb-6">
        Android Large - 4
      </h1>
      <div className="layout pb-8 pt-4">
        <div className="flex justify-between ps-6 pe-3 mb-6">
          <h4 className="font-semibold text-[15px] text-center time">9:41</h4>
          <img src={status} className="status-img" alt="" />
        </div>
        <div className="px-3">
          <h1 className="font-semibold text-[20px] create-account mb-8">
            Create an account
          </h1>
          <form action="">
            <div>
              <input
                type="text"
                className="input py-[10px] px-4 w-full mb-6 text-[12px] font-semibold h-[50px]"
                placeholder="First Name"
              />
              <input
                type="text"
                className="input py-[10px] px-4 w-full mb-6 text-[12px] font-semibold  h-[50px]"
                placeholder="Last Name"
              />
              <input
                type="email"
                className="input py-[10px] px-4 w-full mb-6 text-[12px] font-semibold  h-[50px]"
                placeholder="Email"
              />
              <input
                type="password"
                className="input py-[10px] px-4 w-full mb-6 text-[12px] font-semibold h-[50px]"
                placeholder="Password"
              />
              <div className="flex">
                <input type="checkbox" className="checkbox" name="" id="" />
                <p className="checkbox-text text-[12px] font-medium ms-1">
                  By proceeding, I agree to all{" "}
                  <Link to="/" className="underline link">
                    T&C
                  </Link>{" "}
                  and{" "}
                  <Link to="/" className="underline link">
                    Privacy Policy
                  </Link>
                </p>
              </div>
              <div className="mt-28 mb-4">
                <button className="button rounded-xl py-4 w-full text-[16px] font-semibold">
                  Create an Account
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
                Already have an account?
                <Link to="/login" className="underline link ms-1">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AndroidLargeFour;
