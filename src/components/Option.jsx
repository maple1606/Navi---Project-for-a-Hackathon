import styles from "../style";
import React from "react";
import { catHeart, option1, option2, optionSelected } from "../assets";
import { useState } from "react";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";

const Option = () => {
  const [clicked, setClicked] = useState(false);

  const clickedOnImage = () => {
    setClicked(!clicked);
  };
  
  return (
    <section id="option" className={`flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={catHeart} className="w-[15%] h-[15%] relative z-[5] " />
      </div>
      <div className={`flex w-full p-10`}>
        <div className={`w-full overflow-hidden`}>
          <div className={`cursor-pointer`}>
            <div className={`$bg-primary w-[100%] h-[100%] dialouge`}>
              <p className="font-poppins font-medium text-[16px] leading-[23.4px]">
                <span className="text-black">
                  Now, please choose a situation to try.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex-row w-full overflow-hidden p-3 ${styles.flexCenter}`}
      >
        <button className="image-button-color" onClick={clickedOnImage}>
          <img src={clicked ? optionSelected : option1}></img>
        </button>
        <button className="image-button-color">
          <img src={option2}></img>
        </button>
      </div>
      <div className={`flex-row w-full overflow-hidden ${styles.flexCenter}`}>
       <NavLink to="/ready">
          <button className={`${styles.flexCenter} boxed cursor-pointer`}>
            <div
              className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] boxed`}
            >
              <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                <span className="text-white">Next</span>
              </p>
            </div>
          </button>
          </NavLink>
      </div>
    </section>
  );
};

export default Option;
