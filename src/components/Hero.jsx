import styles from "../style";
import { catGlasses } from "../assets";
import { NavLink } from "react-router-dom";
import CharacterCard from "./Character";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className={`flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={catGlasses} className="w-[15%] h-[15%] relative z-[5] " />
      </div>

      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-SVN-Engine text-center font-semibold ss:text-[56px] text-[52px] text-#273B4A ss:leading-[120px] leading-[75px]">
            WELCOME TO <br className="sm:block hidden" />{" "}
            <span className="text-gradient ss:text-[195px]">NAVI</span>{" "}
          </h1>
        </div>
        
      </div>

      <div className={`flex-col w-full overflow-hidden space-y-7 ${styles.flexCenter}`}>
      <p
          className={`${styles.paragraph} max-w-[470px] mt-5 text-black text-center`}
        >
          The free, fun and effective way to learn how to survive in a fire
          situation
        </p>
        <NavLink to="/card">
          <button className={`${styles.flexCenter} boxed cursor-pointer`}>
            <div
              className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] boxed`}
            >
              <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                <span className="text-white">Get Started</span>
              </p>
            </div>
          </button>
          </NavLink>
        </div>
    </section>
  );
};

export default Hero;
