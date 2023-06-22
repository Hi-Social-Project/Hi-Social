import { Home } from "./pages/index";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
      {/* <h1 className="text-red-600 mt-40">Hello world!</h1> */}
    </div>
  );
}

export default App;
