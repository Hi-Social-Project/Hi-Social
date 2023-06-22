import { logoFooter } from "../../assets/img/index";
import { RiFacebookCircleLine } from "../../../node_modules/react-icons/ri";
import { AiOutlineLinkedin } from "../../../node_modules/react-icons/ai";
import { BsWhatsapp } from "../../../node_modules/react-icons/bs";
import { MdEmail } from "../../../node_modules/react-icons/md";
import { ImLocation2 } from "../../../node_modules/react-icons/im";
import { FaInstagram } from "../../../node_modules/react-icons/fa";
import ContactUs from "./contact-us/contactUs";
import SocialMedia from "./social-media/socialMedia";
import Category from "./category/category";

const Footer = () => {
  return (
    <section>
      <div className="bg-blue-950 flex justify-center p-5 items-center font-plus-jakarta-sans lg:p-24">
        <div className="grid grid-cols-2 md:justify-items-center lg:grid-cols-4 lg:gap-8 ">
          <div className="flex space-x-2 md:space-x-3 items-center lg:items-start ">
            <img src={logoFooter} className="h-16 md:h-20 lg:h-auto" />
            <p className="text-white font-extrabold md:text-xl lg:mt-3">
              HiSocial <br />
              Digital
            </p>
          </div>
          <div className="hidden lg:block  lg:w-52">
            <div className="flex space-x-10 mb-5">
              <SocialMedia icons={<FaInstagram />} />
              <SocialMedia icons={<RiFacebookCircleLine />} />
              <SocialMedia icons={<AiOutlineLinkedin />} />
            </div>
            <p className="text-white text-base">HiSocial Digital gives you ease in learning and improving your skills to become a professional.</p>
          </div>
          <Category />
          <div className="text-white ms-4 lg:w-64">
            <h1 className="font-semibold mb-2 md:text-lg">Contact Us</h1>
            <ContactUs icons={<BsWhatsapp />} text="+6281 8900 8786" />
            <ContactUs icons={<MdEmail />} text="hidigital.info@gmail.com" />
            <ContactUs icons={<ImLocation2 />} text="Jl. Ring Road Utara No.34, Sanggrahan, Maguwoharjo, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281" />
          </div>
        </div>
      </div>
      <div className="bg-blue-500 p-2 text-white text-xs text-center md:text-sm">© 2022 HISOCIAL DIGITAL ALL RIGHTS RESERVEDOWNED BY PT TALENTA SINERGI GROUP</div>
    </section>
  );
};

export default Footer;
