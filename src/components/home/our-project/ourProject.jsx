import CardOurProject from "./card-our-project/cardOurProject";
import { shoes, lotion, fruit } from "../../../assets/img/index";

const OurProject = () => {
  return (
    <section className="flex justify-center mt-12 md:mt-20 lg:mt-32">
      <div className="w-80 md:w-4/5">
        <div className="mb-7 md:flex md:space-x-10 md:items-end lg:items-center lg:mb-16 lg:justify-between">
          <h1 className="font-medium font-clash-display text-2xl md:text-4xl lg:text-5xl">Our Project Have Been Done</h1>
          <button className=" hidden btn-blue-rounded-full font-medium md:block md:w-40 md:h-14">Explore More +</button>
        </div>
        <div>
          <CardOurProject
            img={shoes}
            title="Puma Indonesia"
            order="md:order-last"
            text="Maximize Your Sport Performance & Stay Stylish w/ PUMA's Latest Collection. Free Shipping. Shop High Quality Shoes, Sports Gear & Accessories @PUMA Indonesia Official Online Store."
          />

          <CardOurProject
            img={fruit}
            title="Fruit & Saladies"
            order="md:order-first"
            text="In common language usage, fruit normally means the seed-associated fleshy structures (or produce) of plants that typically are sweet or sour and edible in the raw state, such as apples, bananas, grapes, lemons, oranges, and strawberries"
          />

          <CardOurProject
            img={lotion}
            order="md:order-last"
            title="Ordinary Skincare"
            text="Natural Moisturizing Factors + Beta Glucan is a lightweight gel moisturizer designed to provide all-day hydration after just one application.* It is formulated with natural moisturizing factors,"
          />
        </div>
        <button className="block btn-blue-rounded-full font-medium text-xs h-10 w-full md:hidden">Explore More +</button>
      </div>
    </section>
  );
};

export default OurProject;
