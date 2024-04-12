import React from "react";
import AndroidLargeOneTwo from "../Shared/AndroidLargeOneTwo/AndroidLargeOneTwo";
import android1 from "../../assets/andriod1.png";

const AndroidLargeOne = () => {
  return (
    <div>
      <AndroidLargeOneTwo
        componentName={"Android Large - 1"}
        image={android1}
        title={"Track Your Goal"}
        description={
          "Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals"
        }
      />
    </div>
  );
};

export default AndroidLargeOne;
