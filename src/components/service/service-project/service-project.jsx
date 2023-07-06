// import ProjectTitle from "./project-title/project-title";
// import ProjectCard from "./project-card/project-card";
import { srv1, srv2, srv3, srv4, srv5 } from "../../../assets/service-program/index";
import ListProjectCard from "./list-project-card/list-project-card";

const ServiceProject = ({ t }) => {
  return (
    <section className="px-5 mb-20 flex justify-center">
      <div className=" md:w-10/12 grid grid-cols-1 gap-y-12 md:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        <ListProjectCard text="Eduwork.id Landing Pages" t={t} image={srv1} bgColor="bg-white" textColor="text-black" />
        <ListProjectCard text="Upscale.id Landing Page" t={t} image={srv2} bgColor="bg-transparent" textColor="text-blue-500" />
        <ListProjectCard text="Digital Marketing School Landing Pages" t={t} image={srv3} bgColor="bg-white" textColor="text-black" />
        <ListProjectCard text="Kreatif.com" t={t} image={srv4} />
        <ListProjectCard text="Upscale.id Mobile Appliacations" t={t} image={srv2} bgColor="bg-transparent" textColor="text-blue-500" />
        <ListProjectCard text="Dago Vision Care Landing Pages" t={t} image={srv5} bgColor="bg-white" textColor="text-black" />
      </div>
    </section>
  );
};

export default ServiceProject;
