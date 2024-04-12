import "./AndroidLargeOneTwo.css";
import status from "../../../assets/statusbar.png";
import icon from "../../../assets/icon.png";

const AndroidLargeOneTwo = ({ componentName, image, title ,description}) => {
  return (
    <div className="my-8">
      <h1 className="text-center text-4xl font-bold mb-6">
        {componentName}
      </h1>
      <div className="layout pb-20 px-3 pt-4">
        <div className="flex justify-between">
          <h4 className="font-semibold text-[15px] text-center time">9:41</h4>
          <img src={status} className="status-img" alt="" />
        </div>
        <p className="font-medium text-[16px] skip mt-3">Skip</p>
        <div className="my-14">
          <img src={image} alt="" />
        </div>
        <div className="mb-20">
          <h3 className="font-semibold text-[20px] track mb-3">{title}</h3>
          <p className="font-medium text-[16px] track-desc">
            {description}
          </p>
        </div>
        <div className="flex justify-end">
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AndroidLargeOneTwo;
