import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Middlepages_01 from "./Component/Middlepages_01";
import MiddlePages_02 from "./Component/MiddlePages_02";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Middlepages_01 />
      <MiddlePages_02 />
    </div>
  );
}

export default App;
