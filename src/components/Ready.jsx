import styles from "../style";
import React from "react";
import { useState } from "react";
import { catHeart, option1, option2, optionSelected } from "../assets";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";

const Ready = () => {
  const [clicked, setClicked] = useState(false);

  const clickedOnImage = () => {
    setClicked(!clicked);
  };

  return (
    <section id="ready" className={`flex-col ${styles.paddingY}`}>
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
                    You chose the fire detection mode. Now, are you ready for the challenge?
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-row w-full overflow-hidden space-x-7 ${styles.flexCenter}`}>
       <NavLink to="/option">
          <button className={`${styles.flexCenter} boxed-grey cursor-pointer`}>
            <div
              className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] boxed-grey`}
            >
              <p className="font-poppins font-medium text-[15px] leading-[23.4px]">
                <span className="text-#A4A4A4">No, not yet</span>
              </p>
            </div>
          </button>
          </NavLink>
          <NavLink to="/fire-detect">
          <button className={`${styles.flexCenter} boxed cursor-pointer`}>
            <div
              className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] boxed`}
            >
              <p className="font-poppins font-medium text-[15px] leading-[23.4px]">
                <span className="text-white">Yes, I am ready</span>
              </p>
            </div>
          </button>
          </NavLink>
      </div>
    </section>
  );
};

export default Ready;
