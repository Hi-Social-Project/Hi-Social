import { BsFillArrowRightCircleFill } from "../../../../../node_modules/react-icons/bs";
const ListProjectCard = ({ t, text, image, bgColor, textColor }) => {
  return (
    <section className="flex flex-col items-center space-y-4">
      <div className="group text-center cursor-pointer" tabIndex="1">
        <div className="shadow-lg flex justify-center items-center bg-white relative px-2 rounded-lg z-20 h-14 w-60 md:w-72 lg:w-80">
          <h1 className="font-bold group-focus:text-sky-500 md:text-lg">{text}</h1>
        </div>
        <div className="bg-gradient-to-t from-zinc-900 to-slate-50 rounded-lg w-60 h-14 ms-2 -mt-12 md:w-72 lg:w-80 group-focus:bg-gradient-to-t group-focus:from-sky-500 group-focus:to-slate-50" />
      </div>

      <div className="shadow-2xl flex flex-col">
        <img src={image} alt="image program" className="rounded-lg w-60 md:w-72 md:h-96 lg:w-80 lg:h-[26rem]" />
        <button type="button" className={`flex justify-center items-center space-x-2 relative -mt-12 py-1 px-3 rounded-xl ${bgColor} w-auto me-3 self-end`}>
          <span className={`font-medium text-sm lg:text-lg ${textColor}`}>{t("Service.project-card")}</span> <BsFillArrowRightCircleFill className={`text-lg lg:text-2xl bg-white ${textColor} rounded-full`} />
        </button>
      </div>
    </section>
  );
};

export default ListProjectCard;
