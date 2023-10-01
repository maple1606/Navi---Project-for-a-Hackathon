import styles from "../style";
import React from "react";
import { catGlasses, catHeart } from "../assets";
import { NavLink } from "react-router-dom";

const WelcomeNext = () => {
  const inputValue = window.localStorage.getItem('name');
  return (
    <section id="welcomeNxt" className={`flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={catHeart} className="w-[15%] h-[15%] relative z-[5] " />
      </div>
      <div className={`flex w-full p-10`}>
        <div className={`flex ${styles.flexCenter} w-full overflow-hidden`}>
          <NavLink to="/option">
            <button className={`$bg-primary w-[100%] h-[100%] dialouge`}>
              <p className="font-poppins font-medium text-[16px] leading-[23.4px]">
                <span className="text-black">
                  Hello {inputValue}, I'm Navi. I will be your buddy, supporting you
                  throughout the journey of learning how to self-protect during
                  fire situations.
                </span>
              </p>
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default WelcomeNext;