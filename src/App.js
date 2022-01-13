
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
// import ContactUs from './pages/ContactUs/ContactUs';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CarouselMode from './components/CarouselMode';
import Createrecipe from './pages/CreateRecipe/CreateRecipe';

function App() {
  return (
    
      <Router>
      <div>
        <Navbar/>
        <Routes>
        <Route exact path="/home" element={<Home/>}/>
        {/* <Route exact path="/contactus" element={<ContactUs/>}/> */}
        <Route exact path="/Createrecipe" element={<Createrecipe/>}/>
        </Routes>
        </div>
      </Router>
    
     );
}

export default App;
