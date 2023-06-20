import { shape1, shape2, shape3 } from "../../../assets/shape/index";

import { experienceImg } from "../../../assets/img/index";
import ListExperience from "./list-experience/listExperience";

const OurWork = () => {
  return (
    <section className="mt-8 mb-8 px-5 md:mt-16 lg:mt-28 flex justify-center">
      <div className="w-80 md:w-auto md:grid lg:w-10/12 md:grid-cols-2 md:gap-x-10 md:items-center lg:gap-x-14">
        <div>
          <h1 className="mb-7 font-clash-display text-2xl font-medium md:text-3xl lg:text-5xl">We Create Impactful Experience Stories </h1>

          <ListExperience
            title="Strategi Marketing"
            text="Strategi digital marketing dan kreatif khusus yang diinformasikan oleh penilaian yang kuat & bisnis Anda layak untuk mendapatkan yang lebih baik dari pada strategi yang dikemas sebelumnya"
            img={shape1}
          />

          <ListExperience
            title="Branding Identity"
            text="Lihat kemajuan yang kami buat & apa yang mendorong akan  hasil, kapan saja, kami terus memberi Anda informasi secara transparan secara konsisten dan memberikan informasi terupdate."
            img={shape2}
          />

          <ListExperience
            title="Breaktrough"
            text="Layanan yang cocok  untuk ROI terbesar Anda, bergerak ke arah yang sama menuju sasaran pertumbuhan yang lebih baik dari sebelumnya. Serta memberikan terobosan yang modern dan nyata."
            img={shape3}
          />
        </div>
        <img className="hidden md:block" src={experienceImg} />
      </div>
    </section>
  );
};

export default OurWork;
