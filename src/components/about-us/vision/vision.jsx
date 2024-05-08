import { visionImg1, aboutImg, ourWorkImg } from "../../../assets/img/index";

const Vision = ({ t }) => {
  return (
    <section className="flex flex-col items-center  mb-24 lg:mb-32">
      <div className="grid grid-cols-1 gap-7 justify-between md:w-10/12 md:gap-9 lg:gap-10 lg:grid-cols-2 lg:items-center">
        <div className=" hidden md:grid md:grid-cols-2 md:gap-2 md:order-last lg:order-first">
          <img src={ourWorkImg} className="h-66 object-cover rounded-lg w-full lg:h-56" />
          <img src={aboutImg} className="h-66 object-cover rounded-lg w-full lg:h-56" />
          <img src={visionImg1} className="col-span-2 w-full" />
        </div>
        <div className="order-first lg:order-last justify-self-start lg:justify-self-end">
          <div className=" max-w-[473.394px] space-y-5 lg:space-y-12">
            <div className="flex space-x-7 items-center mb-5">
              <div className="h-1 bg-yellow-500 w-20 lg:w-28" />
              <h1 className="font-clash-display text-3xl font-medium md:text-4xl lg:text-6xl">{t("AboutUs.vision.title")}</h1>
            </div>
            <p className="text-justify md:text-lg lg:text-xl">{t("AboutUs.vision.detail")}</p>
            <button className="btn-outline rounded-lg font-plus-jakarta-sans font-semibold">{t("AboutUs.btn-read-more")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
