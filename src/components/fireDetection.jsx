import styles from "../style";
import React from "react";
import { catThink } from "../assets";
import { useState } from "react";
import { messeges } from "../constants";
import { NavLink } from "react-router-dom";
import SoundVisualizer from "./microRequest";

const FireDetection = () => {
  return (
    <section id="fireDetect" className={`flex-col bg-image`}>
      <div
        className={`flex-1 flex-row ${styles.flexCenter} ${styles.paddingY} w-full md:my-0 my-10 relative`}
      >
        <img src={catThink} className="w-[7%] h-[7%] relative z-[5] " />
        <div className={`flex p-7`}>
          <div className={`overflow-hidden`}>
            <NavLink to="/phone-call">
              <button>
                <div className={`$bg-primary w-[100%] h-[100%] dialouge`}>
                  <p className="font-poppins font-medium text-[16px] leading-[23.4px]">
                    <span className="text-black">
                      First, you have to shout out loud to get the people around
                      to know about the fire. Try to shout as loud as you can.
                    </span>
                  </p>
                </div>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={`flex-1 flex-row ${styles.flexCenter} ${styles.paddingY} w-full md:my-0 my-10 relative`}
      >
        <div>
          <SoundVisualizer />
        </div>
      </div>
    </section>
  );
};

export default FireDetection;
