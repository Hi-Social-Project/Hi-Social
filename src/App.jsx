import { Home, Service } from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router>
        <Navbar id={handleId} en={handleEn} t={t} />
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/service" element={<Service t={t} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
