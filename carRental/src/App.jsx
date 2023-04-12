import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './component';
import { About, Contact, Home, VehicleModels, SignUp, SignIn } from './pages';


function App() {

  return (
    <div className=" bg-mainBg h-screen">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vehicleModel" element={<VehicleModels />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
