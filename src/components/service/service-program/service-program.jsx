import ListProgram from "./list-program/list-program";

const ServiceProgram = ({ t }) => {
  return (
    <section className="px-5 mb-10 flex justify-center md:mt-16 lg:mt-32 lg:mb-28">
      <div className=" space-y-7 md:space-y-10 md:w-10/12 lg:space-y-28">
        <h1 className="font-clash-display text-2xl font-medium md:text-4xl lg:text-5xl">{t("Service.service-program.title")}</h1>
        <div className="flex flex-wrap justify-center gap-3 md:gap-5">
          <ListProgram t={t("Service.service-program.list-program.list-1")} />
          <ListProgram t={t("Service.service-program.list-program.list-2")} />
          <ListProgram t={t("Service.service-program.list-program.list-3")} />
          <ListProgram t={t("Service.service-program.list-program.list-4")} />
          <ListProgram t={t("Service.service-program.list-program.list-5")} />
        </div>
        <div className="space-y-5 lg:space-y-24">
          <h1 className="font-medium text-xl md:text-4xl">{t("Service.service-program.list-program.list-4")}</h1>
          <p className="text-justify md:text-xl lg:text-2xl">{t("Service.service-program.service-program-detail")}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceProgram;
