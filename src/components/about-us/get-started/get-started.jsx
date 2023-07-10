const GetStarted = ({ t }) => {
  return (
    <section className="px-5 mb-24 flex justify-center lg:mb-44">
      <div className="flex flex-col justify-around gap-5   p-5 md:p-8 md:gap-8 md:flex-row md:items-center md:w-10/12 bg-white shadow-lg rounded-br-3xl lg:justify-around lg:p-16 lg:gap-20">
        <div className="">
          <h1 className="text-2xl font-medium mb-3 lg:text-4xl">{t("AboutUs.started")}</h1>
          <p className="text-sm md:text-lg lg:text-3xl">{t("AboutUs.text")}</p>
        </div>
        <button type="button" className="btn-blue-rounded-lg text-sm md:text-lg md:w-44 lg:w-64 lg:text-3xl">
          {t("Home.banner.started")}
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
