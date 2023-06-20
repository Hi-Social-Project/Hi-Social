import CardSeveralService from "./card-several-service/cardSeveralService";
import ListServices from "./list-services/listServices";

const SeveralService = () => {
  return (
    <section className="flex justify-center mt-9 lg:mt-20">
      <div className="w-80 md:w-5/6 lg:w-10/12">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:items-center lg:gap-1">
          <h1 className="font-medium font-clash-display text-2xl md:text-4xl lg:text-6xl">We Offer Several Service For You</h1>
          <p className="text-justify text-base lg:text-xl">
            Kami memiliki pengalaman luar biasa di berbagai sektor dengan pekerjaan yang mencakup geografi, skala, dan ruang lingkup. Tidak ada tantangan yang terlalu besar atau berantakan, akrab atau asing, luas atau khusus.
          </p>
        </div>
        <div className="mt-5 grid grid-cols-1 md:gap-x-12 items-center md:grid-cols-2 lg:gap-x-8">
          <div className="order-last">
            <ListServices number="01." text="Social Media Management" />
            <ListServices number="02." text="Branding Identity Visual" />
            <ListServices number="03." text="Logo Branding" />
            <ListServices number="04." text="Website / Aplikasi / Sistem" />
            <ListServices number="05." text="Digital Marketing Strategy" />
          </div>
          <CardSeveralService />
        </div>
      </div>
    </section>
  );
};

export default SeveralService;
