import { Banner, OurWork, SeveralService, OurProject } from "../../components/home/index";

const Home = () => {
  return (
    <div className="pt-28 md:pt-30 lg:pt-14">
      <Banner />
      <OurWork />
      <SeveralService />
      <OurProject />
    </div>
  );
};

export default Home;
