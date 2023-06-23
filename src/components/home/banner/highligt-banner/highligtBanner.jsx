const HighligtBanner = ({ t }) => {
  return (
    <div className="mt-2 flex justify-center font-plus-jakarta-sans md:mt-8 lg:-mt-10">
      <div className=" bg-blue-500 text-white w-11/12 rounded-3xl py-5 px-5 md:py-8 md:px-10 md:w-full md:mx-2 lg:w-4/5 grid grid-cols-1 items-center justify-items-center md:grid-cols-4 md:justify-items-stretch md:space-x-10 lg:space-x-36">
        <p className="font-clash-display text-xl font-medium md:text-2xl md:w-48 lg:text-4xl lg:w-96">{t("Home.banner.highlight-banner")}</p>
        <div className="flex flex-col md:flex-row lg:space-x-7">
          <div className="flex gap-5 items-center md:flex-col md:gap-1">
            <p className="text-2xl font-semibold md:text-4xl lg:text-6xl">05+</p>
            <p className="text-base w-40 lg:text-md lg:text-center">{t("Home.banner.highlight-1")}</p>
          </div>
          <div className="flex gap-5 items-center md:flex-col md:gap-1">
            <p className="text-2xl font-semibold md:text-4xl lg:text-6xl">05+</p>
            <p className="text-base w-40 lg:text-md lg:w-52">{t("Home.banner.highlight-2")}</p>
          </div>
          <div className="flex gap-5 items-center md:flex-col md:gap-1">
            <p className="text-2xl font-semibold md:text-4xl lg:text-6xl">02+</p>
            <p className="text-base w-40 lg:text-md">{t("Home.banner.highlight-3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighligtBanner;
