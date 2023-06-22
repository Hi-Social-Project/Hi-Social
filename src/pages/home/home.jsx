import { Banner, OurWork, SeveralService, OurProject, Testi, Pricing } from "../../components/home/index";

const Home = () => {
  return (
    <div className="pt-36 md:pt-30 lg:pt-20">
      <Banner />
      <OurWork />
      <SeveralService />
      <OurProject />
      <Testi />
      <Pricing />
    </div>
  );
};

export default Home;
