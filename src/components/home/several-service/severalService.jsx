import CardSeveralService from "./card-several-service/cardSeveralService";
import ListServices from "./list-services/listServices";

const SeveralService = ({ t }) => {
  return (
    <section className="flex justify-center mt-12 md:mt-20 lg:mt-32">
      <div className="w-80 md:w-5/6 lg:w-10/12">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:items-center lg:gap-1">
          <h1 className="font-medium font-clash-display text-2xl md:text-4xl lg:text-5xl">{t("Home.several-services.title")}</h1>
          <p className="text-justify text-base lg:text-xl">{t("Home.several-services.descript")}</p>
        </div>
        <div className="mt-7 grid grid-cols-1 md:mt-9 md:gap-x-12 items-center md:grid-cols-2 lg:mt-12 lg:gap-x-8">
          <div className="order-last">
            <ListServices number="01." text={t("Service.service-program.list-program.list-1")} />
            <ListServices number="02." text={t("Service.service-program.list-program.list-2")} />
            <ListServices number="03." text={t("Service.service-program.list-program.list-3")} />
            <ListServices number="04." text={t("Service.service-program.list-program.list-4")} />
            <ListServices number="05." text={t("Service.service-program.list-program.list-5")} />
          </div>
          <CardSeveralService />
        </div>
      </div>
    </section>
  );
};

export default SeveralService;
