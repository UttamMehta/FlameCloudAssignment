import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Middlepages_01 from "./Component/Middlepages_01";
import MiddlePages_02 from "./Component/MiddlePages_02";
import Middlepages_03 from "./Component/Middlepages_03";
import Middlepages_04 from "./Component/Middlepages_04";
import LastPage from "./Component/LastPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Middlepages_01 />
      <MiddlePages_02 />
      <Middlepages_03 />
      <Middlepages_04 />
      <LastPage />
    </div>
  );
}

export default App;
