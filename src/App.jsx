import react from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
// import "./App.css";s
import Category from "./pages/Category";
import GoGreen from "./pages/GoGreen";
import LuxuryFinishes from "./pages/LuxuryFinishes";
import ByStyle from "./pages/ByStyle";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import NoPage from "./pages/NoPages";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>

      <BrowserRouter>
       <Routes>
        <Route index element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/category" element={<Category />}/>
        <Route path="/gogreen" element={<GoGreen />}/>
        <Route path="/luxuryfinishes" element={<LuxuryFinishes />}/>
        <Route path="/bystyle" element={<ByStyle />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="*" element={<NoPage />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
