import { pumaStore, patner } from "../../../../assets/img/index";
import { FaQuoteLeft } from "../../../../../node_modules/react-icons/fa";

const CardTesti = ({ t }) => {
  return (
    <section className="mt-10 flex md:justify-center items-center lg:mt-14">
      <img src={pumaStore} alt="store" className="hidden absolute h-72 md:left-20 md:block lg:h-auto lg:left-32" />
      <div className="bg-neutral-200 p-3 lg:py-12 w-full rounded-2xl md:items-center md:ms-16 md:w-11/12 md:flex md:justify-end md:h-80 lg:h-auto lg:w-auto">
        <div className="w-auto md:w-96 md:me-5 lg:me-20 lg:w-6/12">
          <p className="text-justify lg:text-3xl">
            <FaQuoteLeft className="text-blue-500 text-3xl mb-3 lg:text-7xl lg:mb-7" />
            {t("Home.testi.testi-text")}
          </p>
          <div className="mt-7 pt-3 flex items-center space-x-3 border-t border-black lg:mt-12 lg:pt-7 lg:space-x-10">
            <img src={patner} alt="patner" className="h-20 lg:h-auto" />
            <div>
              <h1 className="font-semibold lg:text-3xl">Chen Lee Alexander</h1>
              <p className="text-sm lg:text-xl"> {t("Home.testi.job")}</p>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardTesti;
