import { BannerAbout, Vision, Mision, OurLeaders } from "../../components/about-us/index";
import { GetStarted } from "../../components/service";

const AboutUs = ({ t }) => {
  return (
    <section className="px-5 pt-28 md:pt-36 lg:pt-44">
      <div className="flex justify-center">
        <BannerAbout t={t} />
      </div>
      <Vision t={t} />
      <Mision t={t} />
      <OurLeaders t={t} />
      <div className="flex justify-center">
        <GetStarted t={t} />
      </div>
    </section>
  );
};

export default AboutUs;
