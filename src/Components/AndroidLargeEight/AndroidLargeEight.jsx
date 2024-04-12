import React from "react";
import status from "../../assets/statusbar.png";
import chart from "../../assets/chartfull.jpeg";
import chevron from "../../assets/chevron-left.png";
import alertTriangle from "../../assets/alert-triangle.png";
import "./AndroidLargeEight.css";
import workout1 from "../../assets/workout1.png";
import workout2 from "../../assets/workout2.png";
import toggle from "../../assets/toggle.png";
import socialIcons from "../../assets/social-icons.png";
import search from "../../assets/search-circle.png";
import arms from "../../assets/arms.jpeg";

const AndroidLargeEight = () => {
  return (
    <div className="my-8">
      <h1 className="text-center text-4xl font-bold mb-6">Android Large - 8</h1>
      <div className="rounded-border">
        <div className="eight-layout pt-6">
          <div className="flex justify-between items-center ps-6 pe-3 mb-12">
            <h4 className="font-semibold text-[15px] text-center time">9:41</h4>
            <img src={status} className="status-img" alt="" />
          </div>
          <div className="px-3">
            <div className="flex flex-row items-center mb-10">
              <img src={chevron} className="chevron" alt="" />
              <h3 className="font-semibold text-[20px] workout-tracker flex-1 text-center">
                Workout Tracker
              </h3>
            </div>
            <div className="mb-8">
              <img src={chart} alt="" />
            </div>
            <div class="alert-container flex items-center p-2 mb-14">
              <img
                src={alertTriangle}
                className="object-cover w-5 h-5"
                alt=""
              />
              <p className="ms-2 font-medium text-[12.57px] burn">
                You've burned fewer calories than <br /> yesterday. Time to get
                moving!
              </p>
            </div>
            <div>
              <div className="flex justify-between mb-4">
                <h4 className="font-semibold text-[16px] upcoming-workout">
                  Upcoming Workout
                </h4>
                <h6 className="font-medium text-[12px] see-more">See more</h6>
              </div>
              <div className="card rounded-xl px-6 py-3 flex justify-between items-center mb-4">
                <div className="flex justify-center items-center">
                  <img src={workout1} alt="" />
                  <div className="ms-3">
                    <p className="card-title font-medium text-[12px] mb-1">
                      Full Body Workout
                    </p>
                    <p className="card-text font-medium text-[10px]">
                      Today 3pm
                    </p>
                  </div>
                </div>
                <img src={toggle} className="w-10 h-5 object-cover" alt="" />
              </div>
              <div className="card rounded-xl px-6 py-3 flex justify-between items-center mb-5">
                <div className="flex justify-center items-center">
                  <img src={workout2} alt="" />
                  <div className="ms-3">
                    <p className="card-title font-medium text-[12px] mb-1">
                      Upper Body Workout
                    </p>
                    <p className="card-text font-medium text-[10px]">
                      4 Feb, 3:30 pm
                    </p>
                  </div>
                </div>
                <img src={toggle} className="w-10 h-5 object-cover" alt="" />
              </div>
              <h4 className="font-semibold text-[16px] train mb-4">
                What Do You Want to Train
              </h4>
              <div className="flex justify-between items-center training-card rounded-xl px-5">
                <div className="-mt-[30px]">
                  <p className="card-title font-medium text-[12px] mb-1">
                    Full Body Workout
                  </p>
                  <p className="arms font-medium text-[10px] mb-1">Arms</p>
                  <p className="arms font-medium text-[10px] mb-1">Chest</p>
                </div>
                <div className="-mt-6">
                  <img src={arms} className="w-[100px] h-[64px]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-layout">
          <div className="flex justify-center items-center">
            <img src={search} className="-mt-[30px]" alt="" />
          </div>
          <div className="flex justify-center items-center -mt-[25px]">
            <img src={socialIcons} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidLargeEight;
