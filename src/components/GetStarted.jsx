import styles from "../style";

const GetStarted = () => (
  <div className={`${styles.flexCenter} boxed cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] boxed`}>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-color">Get Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
