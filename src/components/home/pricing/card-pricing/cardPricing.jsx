import { AiOutlineArrowRight } from "../../../../../node_modules/react-icons/ai";

const CardPricing = ({ imgPricing, price, type }) => {
  return (
    <section className="flex justify-center">
      <div className="bg-white py-5 px-8 shadow-lg h-64 w-58  rounded-2xl shadow-blue-500 sticky lg:h-80 lg:w-80">
        <img src={imgPricing} alt="bronze" className="w-10 mb-4 lg:w-auto lg:h-auto" />
        <h1 className="text-2xl font-semibold text-blue-500 lg:text-4xl">{price}</h1>
        <h1 className="text-2xl font-medium font-clash-display lg:my-3 lg:text-4xl">{type}</h1>
        <p className="text-justify text-sm w-44 border-t pt-2 mt-3 lg:w-52 lg:text-base">There are many variations of passages of Lorem Ipsum available, </p>
      </div>
      <div className="bg-blue-950 shadow-md p-2 w-58 h-66 mt-7 rounded-2xl -ms-52 flex items-end lg:mt-5 lg:-ms-72 lg:h-84 lg:w-80">
        <p className=" text-white text-sm flex items-center cursor-pointer hover:text-gray-200 active:text-gray-400 lg:text-base">
          CHECK DETAIL <AiOutlineArrowRight className="text-lg ms-3" />
        </p>
      </div>
    </section>
  );
};

export default CardPricing;
