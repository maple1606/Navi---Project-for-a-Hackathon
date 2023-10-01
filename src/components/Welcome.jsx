import styles from "../style";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export let inputValue = "";

const Welcome = () => {
  const [inputValue, setInputValue] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    window.localStorage.setItem('name', event.target.value);
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
        className={`flex ${styles.flexCenter} flex-col space-y-10 justify-between items-center w-full p-10`}
      >
        <form className={`flex ${styles.flexCenter} search-bar `}>
          <label>
            <input
              type="text"
              onChange={handleInputChange}
            />
          </label>
        </form>
        <NavLink to="/welcome-nxt">
          <button className={inputValue ? "boxed" : "boxed-grey"}  disabled={!inputValue}>
            <div
              className={`${styles.flexCenter} w-[100%] h-[100%]`}
            >
              <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                <span className={inputValue ? "text-white" : "text-#A4A4A4"} >Next</span>
              </p>
            </div>
          </button>
          </NavLink>
      </div>
    </section>
  );
};
export default Welcome;
