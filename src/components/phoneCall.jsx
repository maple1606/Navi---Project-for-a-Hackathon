import styles from "../style";
import React from "react";
import { catThink, catLove, phone, ringing, call } from "../assets";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export let inputValue = "";

const PhoneCall = () => {
  let rightNumber = false;
  const [inputValue, setInputValue] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  console.log(inputValue);

  if (inputValue == "114") {
    rightNumber = true;
  }

  return (
    <section id="phoneCall" className={`flex-col bg-image`}>
      <div
        className={`flex-1 flex-row ${styles.flexCenter} ${styles.paddingY} w-full md:my-0 my-10 relative`}
      >
        <img src={rightNumber ? catLove : catThink} className="w-[7%] h-[7%] relative z-[5] " />
        <div className={`flex p-7`}>
          <div className={`overflow-hidden`}>
            <div className={`cursor-pointer`}>
              <div className={`$bg-primary w-[100%] h-[100%] dialouge`}>
                <p className="font-poppins font-medium text-[16px] leading-[23.4px]">
                  <span className="text-black">
                    Second, call the emergency number.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex-1 flex-row space-x-3 ${styles.flexCenter} w-full md:my-0 relative`}
      >
        <form className={rightNumber ? `phoning-green` : `phoning-red`}>
          <label>
            <input type="text" onChange={handleInputChange} />
          </label>
        </form>
        <NavLink to="/nv-Cam">
          <button className="button-image" disabled={!rightNumber}>
            <img
              src={rightNumber ? ringing : call}
              className="w-[60%] h-[60%] relative z-[5] "
            />
          </button>
        </NavLink>
      </div>

      <div
        className={`flex-1 flex-col ${styles.flexCenter} w-full md:my-0 relative`}
      >
        <img src={phone} className="w-[15%] h-[15%] relative z-[5] " />
      </div>
    </section>
  );
};

export default PhoneCall;
