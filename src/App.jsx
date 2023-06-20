import { Home } from "./pages/index";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <h1 className="text-red-600 mt-40">Hello world!</h1> */}
    </div>
  );
}

export default App;
