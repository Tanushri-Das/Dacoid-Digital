import status from "../../assets/statusbar.png";
import socialIcons from "../../assets/social-icons.png";
import chevron from "../../assets/chevron-left.png";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import calendar from "../../assets/calendar.jpeg";
import search from "../../assets/search-circle.png";
import "./AndroidLargeNine.css";

const AndroidLargeNine = () => {
  return (
    <div className="my-8">
      <h1 className="text-center text-4xl font-bold mb-6">Android Large - 9</h1>
      <div className="rounded-border">
        <div className="eight-layout pt-6">
          <div className="flex justify-between items-center ps-6 pe-3 mb-12">
            <h4 className="font-semibold text-[15px] text-center time">9:41</h4>
            <img src={status} className="status-img" alt="" />
          </div>
          <div className="px-3">
            <div className="flex flex-row items-center mb-4">
              <img src={chevron} className="chevron" alt="" />
              <h3 className="font-semibold text-[20px] workout-tracker flex-1 text-center">
                Workout Schedule
              </h3>
            </div>
            <div className="flex justify-center items-center mb-4">
              <img src={left} alt="" />
              <p className="mx-3 font-semibold text-[12px] text-center schedule">
                Feb 2024
              </p>
              <img src={right} alt="" />
            </div>
            <div className="mb-10">
              <img src={calendar} alt="" />
            </div>
          </div>
          <div className="pb-4">
            <div>
              <p className="font-semibold text-[12px] schedule mb-3 ms-4">
                06:00 AM
              </p>
              <div className="border3"></div>
            </div>
            <div>
              <p className="font-semibold text-[12px] schedule ms-4 mt-4">
                07:00 AM
              </p>
              <div className="flex justify-center items-center">
                <div className="border1"></div>
                <button className="font-semibold text-[12px] typeof-workout px-4 py-3">
                  Ab Workout, 7:30am
                </button>
                <div className="border2"></div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[12px] schedule mb-4 ms-4">
                08:00 AM
              </p>
              <div className="border3"></div>
            </div>
            <div>
              <p className="font-semibold text-[12px] schedule mt-4 ms-4">
                09:00 AM
              </p>
              <div className="border4 flex justify-center -mt-3">
                <button className="font-semibold text-[12px] typeof-workout px-4 pt-3 pb-1">
                  Upperbody Workout, 9am
                </button>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[12px] schedule my-4 ms-4">
                10:00 AM
              </p>
              <div className="border3"></div>
            </div>
            <div>
              <p className="font-semibold text-[12px] schedule my-4 ms-4">
                11:00 AM
              </p>
              <div className="border3"></div>
            </div>
            <div>
              <p className="font-semibold text-[12px] schedule my-4 ms-4">
                12:00 AM
              </p>
              <div className="border3"></div>
            </div>
            <div>
              <p className="font-semibold text-[12px] schedule my-4 ms-4">
                01:00 AM
              </p>
              <div className="border3"></div>
            </div>
            <div>
              <div className="flex items-center">
                <p className="font-semibold text-[12px] schedule my-4 ms-4">
                  02:00 AM
                </p>
                <button className="lowerbody font-semibold text-[12px] px-2 py-2 ms-8 -mt-[10px]">
                  Lowerbody Workout, 3pm
                </button>
              </div>
              <div className="border3"></div>
            </div>
            <div>
              <p className="font-semibold text-[12px] schedule ms-4 mt-4">
                03:00 AM
              </p>
              <div className="flex justify-center items-center -mt-[14px]">
                <div className="border5"></div>
                <button className="plus-circle rounded-full flex justify-center items-center text-4xl">
                  +
                </button>
                <div className="border6"></div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[12px] schedule -mt-[14px] mb-4 ms-4">
                04:00 AM
              </p>
              <div className="border3"></div>
            </div>
            <div>
              <p className="font-semibold text-[12px] schedule my-4 ms-4">
                05:00 AM
              </p>
              <div className="border3"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center -mt-8">
          <img src={search} alt="" />
        </div>
        <div className="social-icons-layout flex justify-center items-center pb-8 -mt-4">
          <img src={socialIcons} className="-mt-5" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AndroidLargeNine;
