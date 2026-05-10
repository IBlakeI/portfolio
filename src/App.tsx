import Portfolio from "./components/Portfolio";
import SaturnScene from "./components/SaturnScene";

import "./App.css";
const App = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="fixed inset-0">
        <SaturnScene />
      </div>

      <main className="relative">
        <Portfolio />
      </main>
    </div>
  );
};

export default App;
