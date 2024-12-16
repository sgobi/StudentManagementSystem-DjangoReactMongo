import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Manage from "./components/Students/StudentManage";
import MarksManage from "./components/Marks/MarksManage";
import Students from "./components/Students/Students";


import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route path="/students/students" element={<Students/>} />
         <Route path="/students/manage" element={<Manage/>} />
         <Route path="/Marks/MarksManage" element={<MarksManage/>} />
       </Routes>
    </BrowserRouter>
  );
};

export default App;