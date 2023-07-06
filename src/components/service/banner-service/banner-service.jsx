import { serviceImg } from "../../../assets/img/index";

const BannerService = ({ t }) => {
  return (
    <section className="mb-72 md:mb-[29rem] lg:mb-[47rem]">
      {/* mt-72 md:mt-[28rem] lg:mt-[33rem]  */}
      <div>
        <div className="w-full gradient-img-service h-[240px] z-10 absolute md:h-[400px] lg:h-[600px]" />
        <img src={serviceImg} alt="service banner" className="w-full absolute top-20 h-[240px] md:h-[400px] lg:h-[600px]" />
        <div className=" absolute z-20 w-full top-36 text-center flex flex-col items-center space-y-1 md:space-y-3 lg:space-y-7 md:top-48 lg:top-64">
          <h1 className="text-2xl font-clash-display text-white font-semibold md:text-4xl lg:text-7xl">SERVICES</h1>
          <p className="text-sm text w-8/12 text-white md:text-lg lg:text-2xl lg:w-6/12">{t("Service.banner")}</p>
        </div>
      </div>
    </section>
  );
};

export default BannerService;
