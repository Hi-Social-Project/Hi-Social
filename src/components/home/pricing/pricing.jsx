import { hiBronze, hiSilver, hiGold } from "../../../assets/shape/index";
import CardPricing from "./card-pricing/cardPricing";
const Pricing = () => {
  return (
    <section className="px-5 mb-16 mt-16 flex justify-center md:mt-20 lg:mt-32">
      <div className="w-80 md:w-11/12 lg:w-10/12">
        <h1 className="font-medium font-clash-display text-2xl mb-4 md:text-4xl lg:text-6xl">Pricing & Plan for Everyone.</h1>
        <div className="md:flex md:justify-between">
          <p className="text-justify mb-2 md:text-lg md:w-96 lg:text-2xl lg:w-6/12">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
          <button className="btn-blue-rounded-full my-3 font-medium md:h-14 md:text-lg lg:h-12 lg:w-64">Hubungi admin</button>
        </div>
        <div className="mt-10 flex flex-col justify-center space-y-9 md:mt-14 md:flex-row md:space-y-0 md:space-x-3 lg:mt-14 lg:justify-between">
          <CardPricing imgPricing={hiBronze} price="IDR 2,200" />
          <CardPricing imgPricing={hiSilver} price="IDR 3,500" />
          <CardPricing imgPricing={hiGold} price="IDR 5,500" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
