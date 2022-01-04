import react from "react";

import Home from "./components/Home";
import Middle from "./components/Middle";
import Right from "./components/Right";
function App() {
  return (
    <div style={{ display: "flex" }}>
      <Home />
      <Middle />
      <Right />
    </div>
  );
}

export default App;
