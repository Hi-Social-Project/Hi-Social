import HighligtBanner from "../../home/banner/highligt-banner/highligtBanner";

const DetailService = ({ t }) => {
  return (
    <section className="grid grid-cols-1 justify-items-center mb-12 lg:mb-20">
      <div className="space-y-8 lg:space-y-28">
        <div className="px-5 grid grid-cols-1 justify-items-center items-center gap-5 md:mx-12 md:grid-cols-2 lg:grid-cols-5 lg:mx-auto lg:w-10/12 lg:gap-8">
          <h1 className="text-2xl font-medium font-clash-display md:text-4xl lg:text-6xl lg:col-span-3">{t("Service.detail-service")}</h1>
          <p className=" text-justify md:text-lg lg:text-3xl lg:col-span-2">{t("Service.banner")}</p>
        </div>
        <HighligtBanner margin="" t={t} />
      </div>
    </section>
  );
};

export default DetailService;
