import { ourWorkImg } from "../../../../assets/img/index";

const CardSeveralService = () => {
  return (
    <section className="hidden md:block">
      <img src={ourWorkImg} alt="our work" className="h-96 absolute lg:h-auto" />
      <div className="h-96 bg-gradient-to-b from-sky-900 to-slate-200 w-80 rounded-lg mt-5 ms-5 lg:h-h-custom lg:w-w-custom lg:mt-8 lg:ms-8"></div>
    </section>
  );
};

export default CardSeveralService;
