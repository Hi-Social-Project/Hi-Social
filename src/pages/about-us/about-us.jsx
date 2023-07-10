import { BannerAbout, Vision, Mision, OurLeaders, GetStarted } from "../../components/about-us/index";

const AboutUs = ({ t }) => {
  return (
    <section className="pt-28 md:pt-36 lg:pt-20">
      <BannerAbout t={t} />
      <Vision t={t} />
      <Mision t={t} />
      <OurLeaders t={t} />
      <GetStarted t={t} />
    </section>
  );
};

export default AboutUs;
