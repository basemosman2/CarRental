import { Routes, Route } from "react-router-dom";
import { NavBar } from "./component";
import { About, Contact, Home, VehicleModels,Checkout } from "./pages";

function App() {
  return (
    <div className=" bg-mainBg h-full">
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vehicleModel" element={<VehicleModels />} />
          <Route path="/vehicleModel/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
