import styles from "../style";
import { catGlasses } from "../assets";
import CharacterCard from "./Character";
import Button from "./Button";
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
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 text-#273B4A text-center`}
        >
          The free, fun and effective way to learn how to survive in a fire
          situation
        </p>
      </div>

      <div className={`flex-1 ${styles.flexCenter}`}>
        <Button>
          
        </Button>
      </div>
    </section>
  );
};

export default Hero;
