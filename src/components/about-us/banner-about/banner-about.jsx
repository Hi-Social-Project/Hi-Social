import { aboutBanner } from "../../../assets/img/index";

const BannerAbout = ({ t }) => {
  return (
    <section className="mb-24 px-5 grid gap-y-8 grid-cols-1 md:items-center md:grid-cols-2 md:gap-x-8 md:pe-0 lg:mb-20">
      <div className="font-plus-jakarta-sans flex justify-center">
        <div className=" md:w-9/12 lg:w-8/12">
          <h1 className="font-clash-display text-3xl font-medium my-4 md:text-4xl md:font-medium lg:text-6xl">{t("AboutUs.banner.title")}</h1>
          <p className=" font-semibold my-7 text-justify md:text-base lg:text-xl lg:my-10">{t("AboutUs.banner.detail")}</p>
          <button className="btn-blue-rounded-full flex  items-center mt-3 text-sm font-semibold md:px-7 md:text-lg lg:mt-10 lg:py-3 lg:mb-5">{t("AboutUs.banner.button")}</button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <img src={aboutBanner} className=" lg:w-full " />
        <div className="flex flex-col items-center bg-white py-1 px-1 shadow-md rounded-lg w-full relative mt-3 md:py-3 md:-mt-10 md:w-24 lg:-mt-14 lg:w-36 lg:ms-44">
          <h1 className="font-clash-display text-2xl font-medium lg:text-4xl">05+</h1>
          <p className="text-xs text-center font-medium lg:text-lg">{t("Home.banner.highlight-2")}</p>
        </div>
      </div>
    </section>
  );
};

export default BannerAbout;
