import react from "react";
import Home from "./pages/Home";
// import "./App.css";s
import Category from "./pages/Category";
import GoGreen from "./pages/GoGreen";
import LuxuryFinishes from "./pages/LuxuryFinishes";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* <Home />
      <Category/> */}
      <GoGreen/>
      <LuxuryFinishes/>
    </div>
  );
}

export default App;
