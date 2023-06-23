import CardTesti from "./card-testi/cardTesti";

const Testi = ({ t }) => {
  return (
    <section className="px-5 mt-16 mb-14 flex justify-center lg:mt-36">
      <div className="w-80 md:w-11/12 lg:w-10/12">
        <h1 className="text-center font-medium text-2xl md:text-4xl lg:text-6xl">
          {t("Home.testi.title")}
          <br />
          <span className="text-lg md:text-2xl lg:text-4xl"> {t("Home.testi.title-2")}</span>
        </h1>
        <CardTesti t={t} />
      </div>
    </section>
  );
};

export default Testi;
