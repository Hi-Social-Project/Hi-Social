import { Home } from "./pages/index";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const handleId = () => {
    i18n.changeLanguage("id");
    localStorage.setItem("lang", "id");
  };
  const handleEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("lang", "en");
  };

  return (
    <div>
      <Navbar id={handleId} en={handleEn} t={t} />
      <Home t={t} />
      <Footer />
      {/* <h1>{t("kntl")}</h1> */}
      {/* <h1 className="text-red-600 mt-40">Hello world!</h1> */}
    </div>
  );
}

export default App;
