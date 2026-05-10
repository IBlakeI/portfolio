import Portfolio from "./components/Portfolio";
import SaturnScene from "./components/SaturnScene";

import "./App.css";
const App = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0">
        <SaturnScene />
      </div>

      <main className="bg-background/90 dark relative">
        <Portfolio />
      </main>
    </div>
  );
};

export default App;
