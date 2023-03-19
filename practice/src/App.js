import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Admin from './Components/Administration/Admin'
import Doctor from './Components/Doctor/Doctor'
import Pharmacist from './Components/Pharmacy/Pharmacist'
import Reception from './Components/Reception/Reception'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/home" element = {<Home/>}/>
        <Route path="/admin" element = {<Admin/>}/>
        <Route path="/doctor" element = {<Doctor/>}/>
        <Route path="/pharmacist" element = {<Pharmacist/>}/>
        <Route path="/reception" element = {<Reception/>}/>
      </Routes>
    </Router>
  )
}
export default App