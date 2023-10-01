import styles from "../style";
import React from "react";
import { useState } from "react";
import { char1, char2, char3, char4 } from "../assets";
import { NavLink } from "react-router-dom";

const CharacterCard = () => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

  const clickedOnImage1 = () => {
    setClicked1(true);
    setClicked2(false);
    setClicked3(false);
    setClicked4(false);
    setIsNextButtonEnabled(true);

  };
  
  const clickedOnImage2 = () => {
    setClicked1(false);
    setClicked2(true);
    setClicked3(false);
    setClicked4(false);
    setIsNextButtonEnabled(true);

  };
  
  const clickedOnImage3 = () => {
    setClicked1(false);
    setClicked2(false);
    setClicked3(true);
    setClicked4(false);
    setIsNextButtonEnabled(true);

  };
  
  const clickedOnImage4 = () => {
    setClicked1(false);
    setClicked2(false);
    setClicked3(false);
    setClicked4(true);
    setIsNextButtonEnabled(true);

  };


  return (

    <section id="card" className={`flex-col ${styles.paddingY}`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-DIN-Round-Pro text-center font-semibold ss:text-[28px] text-[52px] text-#273B4A ss:leading-[50px] leading-[75px]">
          Choose your <br className="sm:block hidden" />{" "}
          <span className="text-gradient ss:text-[56px]">Character</span>{" "}
        </h1>
      </div>
      <div className={`flex-col w-full overflow-hidden ${styles.flexCenter}`}>
        <div
          className={`flex-row w-full overflow-hidden p-3 ${styles.flexCenter}`}
        >
          <button
            className={clicked1 ? "image-button-color" : "image-button-grey"}
            onClick={clickedOnImage1}
          >
            <img src={char1}></img>
          </button>
          <button
            className={clicked2 ? "image-button-color" : "image-button-grey"}

            onClick={clickedOnImage2}
          >
            <img src={char2}></img>
          </button>
        </div>
        <div className={`flex-row w-full overflow-hidden ${styles.flexCenter}`}>
          <button
            className={clicked3 ? "image-button-color" : "image-button-grey"}
            onClick={clickedOnImage3}
          >
            <img src={char3}></img>
          </button>
          <button
            className={clicked4 ? "image-button-color" : "image-button-grey"}
            onClick={clickedOnImage4}
          >
            <img src={char4}></img>
          </button>
        </div>
        <div className={`flex-row w-full overflow-hidden ${styles.flexCenter} p-10` }>
          <NavLink to="/welcome">
          <button className={isNextButtonEnabled ? "boxed" : "boxed-grey"}  disabled={!isNextButtonEnabled}>
            <div
              className={`${styles.flexCenter} w-[100%] h-[100%]`}
            >
              <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                <span className={isNextButtonEnabled ? "text-white" : "text-#A4A4A4"} >Next</span>
              </p>
            </div>
          </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CharacterCard;
