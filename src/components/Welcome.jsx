import styles from "../style";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  const [inputGot, setInputGot] = useState(false);

  const getYourInput = () => {
    setInputGot(!inputGot);
  };

  return (
    <section id="welcome" className={`flex-col ${styles.paddingY}`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-DIN-Round-Pro text-center font-semibold ss:text-[28px] text-[52px] text-#273B4A ss:leading-[50px] leading-[75px]">
          How should we <br className="sm:block hidden" />{" "}
          <span className="text-gradient ss:text-[56px]">call you?</span>{" "}
        </h1>
      </div>
      <div
        className={`flex ${styles.flexCenter} flex-row justify-between items-center w-full p-10`}
      >
        <form className={`flex ${styles.flexCenter} search-bar `}>
          <label>
            <input type="text" />
          </label>
        </form>
      </div>
      <div className={`flex-row w-full overflow-hidden ${styles.flexCenter}`}>
        <NavLink to="/welcome-nxt">
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
export default Welcome;
