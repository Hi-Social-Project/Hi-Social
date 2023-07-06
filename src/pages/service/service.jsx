import { BannerService, DetailService, ServiceProgram, ServiceProject } from "../../components/service/index";

const Service = ({ t }) => {
  return (
    <section className="pt-20 md:pt-30 lg:pt-20">
      <BannerService t={t} />
      <DetailService t={t} />
      <ServiceProgram t={t} />
      <ServiceProject t={t} />
    </section>
  );
};

export default Service;
