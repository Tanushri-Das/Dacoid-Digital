import React from "react";
import status from "../../assets/statusbar.png";
import "./AndroidLargeSix.css";
import checkbox from "../../assets/checkbox.png";

const AndroidLargeSix = () => {
  return (
    <div className="my-8">
      <h1 className="text-center text-4xl font-bold mb-6">Android Large - 6</h1>
      <div className="layout pb-20 pt-4">
        <div className="flex justify-between ps-6 pe-3 mb-10">
          <h4 className="font-semibold text-[15px] text-center time">9:41</h4>
          <img src={status} className="status-img" alt="" />
        </div>
        <h1 className="font-semibold text-[20px] goals mb-12 text-center">
          What are your goals?
        </h1>
        <div className="px-3">
          <div className="box rounded-xl ps-6 pe-4 py-4 mb-5 flex justify-between items-center">
            <h3 className="box-text font-semibold text-[12px]">Weight Loss</h3>
            <img src={checkbox} className="box-checkbox" alt="" />
          </div>
          <div className="box rounded-xl ps-6 pe-4 py-4 mb-5 flex justify-between items-center">
            <h3 className="box-text font-semibold text-[12px]">Muscle Gain</h3>
            <img src={checkbox} className="box-checkbox" alt="" />
          </div>
          <div className="box rounded-xl ps-6 pe-4 py-4 mb-5 flex justify-between items-center">
            <h3 className="box-text font-semibold text-[12px]">
              General Fitness
            </h3>
            <img src={checkbox} className="box-checkbox" alt="" />
          </div>
          <div className="box rounded-xl ps-6 pe-4 py-4 mb-5 flex justify-between items-center">
            <h3 className="box-text font-semibold text-[12px]">
              Event - specific training
            </h3>
            <img src={checkbox} className="box-checkbox" alt="" />
          </div>
          <div className="box rounded-xl ps-6 pe-4 py-4 flex justify-between items-center">
            <h3 className="box-text font-semibold text-[12px]">
              Mindfulness and Mental Health
            </h3>
            <img src={checkbox} className="box-checkbox" alt="" />
          </div>
          <button className="mt-44 button rounded-xl py-4 w-full text-[16px] font-semibold">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AndroidLargeSix;
