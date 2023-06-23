import { bannerImage } from "../../../assets/img/index";
import { IoIosArrowForward } from "../../../../node_modules/react-icons/io";
import HighligtBanner from "./highligt-banner/highligtBanner";

const Banner = ({ t }) => {
  return (
    <div>
      <div className="px-5 grid gap-y-5 grid-cols-1 md:items-center md:grid-cols-2 md:gap-x-8 md:pe-0">
        <div className="font-plus-jakarta-sans flex justify-center">
          <div className=" md:w-9/12 lg:w-3/5">
            <p className="font-semibold text-lg mb-5 md:text-xl lg:mb-8 lg:text-2xl">{t("Home.banner.title")}</p>
            <h1 className="font-clash-display text-5xl font-semibold my-4 md:text-5xl md:font-medium lg:text-8xl">HiSocial Digital.</h1>
            <p className="text-sm my-7 text-justify md:text-base lg:text-lg lg:my-10">{t("Home.banner.descript")}</p>
            <button className="btn-blue-rounded-full flex  items-center mt-3 text-xs font-semibold md:px-7 md:text-lg lg:mt-10 lg:py-3 lg:mb-5">
              Get Started <IoIosArrowForward className="bg-white text-black rounded-full ms-2 text-xl" />{" "}
            </button>
          </div>
        </div>
        <div>
          <img src={bannerImage} className="lg:h-screen lg:w-full" />
        </div>
      </div>
      <HighligtBanner t={t} />
    </div>
  );
};

export default Banner;
