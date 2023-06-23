import { Banner, OurWork, SeveralService, OurProject, Testi, Pricing } from "../../components/home/index";

const Home = ({ t }) => {
  return (
    <div className="pt-36 md:pt-30 lg:pt-20">
      <Banner t={t} />
      <OurWork t={t} />
      <SeveralService t={t} />
      <OurProject t={t} />
      <Testi t={t} />
      <Pricing t={t} />
    </div>
  );
};

export default Home;
